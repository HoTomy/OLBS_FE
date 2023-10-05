import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface StaffRouteProps extends RouteProps {
  isAuthenticated: boolean;
  isStaff: boolean;
  component: React.ComponentType<any>;
}

const StaffRoute: React.FC<StaffRouteProps> = ({
  isAuthenticated,
  isStaff,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && isStaff ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default StaffRoute;