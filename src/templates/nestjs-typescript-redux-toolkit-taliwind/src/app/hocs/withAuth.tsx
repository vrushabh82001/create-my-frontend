"use client";

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Spinner from '@/components/spinner/index';
import { MESSAGE } from '@/common/constant';

/**
 * HOC to protect routes that require authentication.
 *
 * If the user is logged in (i.e., a token is stored in local storage), and the
 * user is attempting to access the auth pages, redirect them to the dashboard.
 *
 * If the user is not logged in, and they are attempting to access a page that
 * is not the auth pages, redirect them to the login page.
 */
const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
  /**
   * The component that is returned by the HOC.
   */
  const AuthHOC: React.FC<P> = (props) => {
    const pathname = usePathname();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    /**
     * Check if the user is logged in, and if they are attempting to access the
     * auth pages, redirect them to the dashboard. If they are not logged in, and
     * they are attempting to access a page that is not the auth pages, redirect
     * them to the login page.
     */
    useEffect(() => {
      const token = localStorage.getItem(MESSAGE.Token);

      if (token && (pathname.includes('auth') || pathname === '/')) {
        router.push('/dashboard');
        return;
      }

      if (!token && !pathname.includes('/auth')) {
        router.push('/auth/login');
        return;
      }

      setLoading(false);
    }, [pathname, router]);

    /**
     * If the user is attempting to access a protected page, and the loading
     * state is true, return a spinner component.
     */
    if (loading) {
      return <Spinner />;
    }

    /**
     * If the loading state is false, return the wrapped component.
     */
    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;
