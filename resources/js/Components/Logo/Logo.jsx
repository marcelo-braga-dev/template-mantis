// material-ui
import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  return (
    <div className="bg-dark me-4 mt-3 p-3 rounded">
        <img src={'/storage/app/logo.png'} width="100%" alt="Logo"/>
    </div>
  );
};

export default Logo;
