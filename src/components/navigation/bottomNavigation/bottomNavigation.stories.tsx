import React, { ChangeEvent } from 'react';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BottomNavigation, BottomNavigationProps } from './bottomNavigation';
import { BottomNavigationAction } from './bottomNavigationAction';

export default {
  title: 'Components/Navigation/BottomNavigation',
  component: BottomNavigation
} as Meta;

const Template: Story<BottomNavigationProps> = (args) => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      {...args}
      value={value}
      onChange={(_: ChangeEvent<{}>, newValue: number) => setValue(newValue)}
    >
      <BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
      <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
      <BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export const Main = Template.bind({});
