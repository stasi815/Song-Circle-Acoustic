import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='footer-info'>
                <footer>
                    <ul className='footer-list'>
                        <li><a href="https://www.nossairmandade.com/">Nossa Irmandade</a></li>
                        <li><a href="http://www.santodaime.org/">SantoDaime.org</a></li>
                        <li>Anastasia Gallardo &copy; 2020</li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Footer