import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="container">
            <div className="container-fluid" style={{backgroundColor:"#1B2631",color:"white"}}>
                <footer class="page-footer font-small blue">

                    <div class="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="https://www.linkedin.com/in/amar-tauqeer/"> Amar Tauqeer</a>
                    </div>

                </footer>

            </div>
            </div>
        )
    }
}