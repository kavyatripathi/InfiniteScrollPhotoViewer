import React,{useState} from 'react';
import styled from 'styled-components';
import Modal from "react-modal";
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Images = (props) =>
{
    const [open, setOpen] = useState(false);
    function showModal() {
        setOpen(!open);
      }
    return (
        <div>
            <Img src={props.url} key={props.key} alt="picture" onClick={showModal}/>
            <Modal
            isOpen={open}
            onRequestClose={showModal}
            contentLabel="Image"
            >
            <div >More info about the image :{props.key}</div>
            <Img src={props.full} key={props.key}/>
            <h1>Photographer: {props.author}</h1>
            <h2>Total Downloads:{props.download}</h2>
            <button onClick={showModal}>Close</button>
            </Modal>
        </div>
    );
};
export default Images;