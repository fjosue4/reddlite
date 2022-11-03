import React, { useEffect, useState } from "react";
import './ThemeToggle.css';
import { Icon } from "@iconify/react";

export let currentTheme;

function ThemeToggle () {

    return (
        <div className="theme-toggle">
            <div className="day-mode active">
                <Icon icon="clarity:sun-solid" />
            </div>
            <div className="night-mode inactive">
                <Icon icon="akar-icons:moon-fill" />
            </div>
        </div>
    )
}

export default ThemeToggle;