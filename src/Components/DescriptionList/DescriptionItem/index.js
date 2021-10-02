import React from "react"
import "./style.css"
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {BoxContantModal} from "../BoxContantModal";

export const DescriptionItem = ({detail}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const openModal = () => {
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                className="window_for_modal"
            >
                <BoxContantModal detail={detail}/>
            </Modal>
        )
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="card_variables" >
            <h3 className="card_variables_title">{detail.Name}</h3>
            <p className="card_variables_sub_title">{detail.GroupName}</p>
            <p className="card_variables_sub_text">{detail.Description.replace(/<\/?[^>]+>/g, '\n')}</p>

            <Button onClick={handleOpen}
                    style={{
                        position: 'absolute',
                        background: '#fff',
                    }}
                    className="button">
                Развернуть...
            </Button>
            {openModal()}
        </div>
    );
};