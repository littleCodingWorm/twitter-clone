import { Button } from '@/components/ui/button';
import React from 'react';

const UserPage = () => {
  return (
    <div>
      <ul>
        <li>avt</li>
        <li>the cover / the header image</li>
        <Button className="text-black" variant="outline">
          follow
        </Button>
      </ul>
      <ul>
        <li>me part</li>
        <Button className="text-black" variant="outline">
          edit profile
        </Button>
      </ul>
    </div>
  );
};

export default UserPage;
