'use client';
import { Image } from '@chakra-ui/react';

export default function TechGridItem(props) {
    const { itemName } = props;
    return(
        <>
            <div className="TechWrapper">
                <div className="checkBoxItem">
                    <Image 
                        src="../checkbox.svg"
                        boxSize="2em"
                        alt="checkbox"
                    />
                </div>
                <div className="TechItem">
                    {itemName}
                </div>
            </div>
        </>
    )
}