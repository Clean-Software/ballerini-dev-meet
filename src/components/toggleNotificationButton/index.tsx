import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import Button from '../button';

const ToggleNotificationButton = () => {
    const [enabled, setEnabled] = useState(false);

    return (
      <Button
        icon={{
          type: Feather,
          name: enabled ? "bell-off" : "bell",
          color: enabled ? "#da3e3e" : "#FFFFFF",
        }}
        size={19}
        backgroundColor={
          enabled ? "rgba(218, 62, 62, 0.2)" : "rgba(255, 255, 255, 0.2)"
        }
        style={{ borderRadius: 8 }}
        onPress={() => setEnabled(!enabled)}
      />
    );
};

export default ToggleNotificationButton;
