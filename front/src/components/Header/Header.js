import React from 'react'
import "../../css/Header/Header.css";
import { statics } from '../../static';
export default function Header() {
    return (
        <header>
            {statics.headerTitle}
        </header>
    )
}
