import {} from 'react-router-dom';
// import { Logos } from "../styledComponents/TopMenu.js";
import styled from "styled-components";

/*.##........#######...######....#######...######.
  .##.......##.....##.##....##..##.....##.##....##
  .##.......##.....##.##........##.....##.##......
  .##.......##.....##.##...####.##.....##..######.
  .##.......##.....##.##....##..##.....##.......##
  .##.......##.....##.##....##..##.....##.##....##
  .########..#######...######....#######...######.*/
import StonedColdDreamery from '../photo_assets/Logos/StonedColdDreamery.png';
// import SCD_Cone from '../photo_assets/Logos/SCD_Cone.png';

const Logos = styled.div`
  list-style: none;
  display: flexbox;  
  // flex-flow: row wrap;  
  // justify-content: flex-start;
`;

const Cone = styled.button`
    width: 2px;
    height: 1px;
`

const LogoTray=()=> {
    return (
        <Logos>
            <ul>
                <li>
                    <button>
                        <Cone>
                                <img src={StonedColdDreamery} alt=""/>
                        </Cone>
                    </button>                   
                    SCD-Initials
                </li>
                <li>
                    {/* < to='/'><img src={SCD_Cone} alt=""/></> */}
                    SCD-cone
                </li>
                <li>
                <button>
                    {/* <img src="" alt=""/> */}
                    Stoned Cold Dreamery
                </button>                    
                </li>
            </ul>
        </Logos> 
    )
};

export default LogoTray;