import React from 'react';
import {
  SwipeableDrawer,
  DrawerProps as MaterialDrawerProps
} from '@material-ui/core';

export interface DrawerProps
  extends Omit<MaterialDrawerProps, 'onClose' | 'open'> {
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: React.ReactEventHandler<{}>;
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: React.ReactEventHandler<{}>;
  /**
   * If `true`, the drawer is open.
   */
  open: boolean;
  /**
   * The elevation of the drawer.
   */
  elevation?: number;
}

export const Drawer: React.FC<DrawerProps> = ({ ...props }) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      {...props}
    />
  );
};