import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import * as React from "react";

export default function StatusIcons({status}) {

    switch (status) {
        case 'aberto' :
            return <CheckCircleOutlineOutlinedIcon fontSize="small" color="success"/>;
        case 'bloqueado' :
            return <BlockOutlinedIcon fontSize="small" color="error"/>;
        default:
            return 'desconhecido'
    }
}
