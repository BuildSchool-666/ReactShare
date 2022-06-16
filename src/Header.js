import React from "react";
import "./Header.css";
import Search from "@mui/icons-material/Search"
// import { Search } from"@mui/icons-material/Search";
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material'
import { MdAccountCircle } from "react-icons/md";
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";


function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="header">
            <Link to='/'>
                <img className="header_icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""/>
            </Link>

            <div className="header_center">
                <input type="text" />
                <Search className="BTN" />
            </div>
            <div className="header_right">
                <p>Become a Host</p>
                <LanguageIcon />
                <Button className="btnRight" id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    <Badge badgeContent={2} max={99} color="warning" className="badge">
                        <MenuIcon />
                        <MdAccountCircle className="mdAccountCircle" />
                    </Badge>
                </Button>
                <Menu
                    id="fade-menu" PaperProps={{

                        elevation: 0,
                        sx: {
                            borderRadius: 3,
                            width: 200,
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 2.0,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,

                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose} sx={{ my: 2 }}>Sign up</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ my: 2 }}>Login in</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose} sx={{ my: 2 }}>Host your home</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ my: 2 }}>Host an experience</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ my: 2 }}>Help</MenuItem>
                </Menu>
            </div>

        </div>


    )
}


export default Header;