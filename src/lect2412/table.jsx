import * as React from "react";
class Timetable extends React.Component{
    render(){
        return( <div>
            <table border={1}>
                <tr>
                    <th colSpan={6}>
                        <h3>
                        RK UNIERSITY,<br/>
                        SCHOOL OF ENGINEERING,<br/>
                        6CEA
                        </h3> 
                    </th>
                    
                </tr>
                <tr>
                    <td colSpan={2}>class counselar Pro. Anju Kakkad</td>
                    <td></td>
                    <td></td>
                    <td colSpan={2}>W.E.F 17/12/2024</td>
                </tr>
                <tr>
                    <td></td>
                    <td>MONDAY</td>
                    <td>TUESDAY</td>
                    <td>WEDNESDAY</td>
                    <td>THURSDAY</td>
                    <td>FRIDAY</td>
                </tr>
                <tr>
                    <td>8:00 to 8:55</td>
                    <td>React (NV)</td>
                    <td rowSpan={2}>React (NV)</td>
                    <td>AI/ML (CP)</td>
                    <td>React (SMS)</td>
                    <td>PD (DS)/DM (Lib)/EC (Lib)</td>
                </tr>
                <tr>
                    <td>8:55 to 9:45</td>
                    <td>React (NV)</td>
                    <td>AI/ML (CP)</td>
                    <td>React (SMS)</td>
                    <td>PD (DS)/DM (Lib)/EC (Lib)</td>
                </tr>
                <tr>
                    <td>Class/Lab location</td>
                    <td>LL1</td>
                    <td>LL5</td>
                    <td>LL1</td>
                    <td>LL1</td>
                    <td>118</td>
                </tr>
                <tr>
                    <td>9:45 ΤΟ 10:00</td>
                    <td colSpan={5}>TEA BREAK</td>
                </tr>
                <tr>
                    <td>10:00 ΤΟ 10:50</td>
                    <td>.NET (PIT)/ ADV. JAVA (NC)</td>
                    <td>NET (BC)/ ADV. JAVA (NC)</td>
                    <td>TOC (AKK)</td>
                    <td rowSpan={2}>AI/ML (CP)</td>
                    <td>AI/MCP</td>
                </tr>
                <tr>
                    <td>10:50 ΤΟ 11:40</td>
                    <td>.NET (PIT)/ ADV. JAVA (NC)</td>
                    <td>.NET (BD)/ ADV. JAVA (NC)</td>
                    <td>TOC (AKK)</td>
                    <td>TOC (AKK)</td>
                </tr>
                <tr>
                    <td>Class/Lab location</td>
                    <td>LL1/LL5</td>
                    <td>LL1/LL5</td>
                    <td>201</td>
                    <td>LL6</td>
                    <td>LL7</td>
                </tr>
                <tr>
                    <td>11:40 ΤΟ 12:30</td>
                    <td colSpan={5}>LUNCH BREAK</td>
                </tr>
                <tr>
                    <td>12:30 ΤΟ 1:20</td>
                    <td rowSpan={2}>PD (Lib)/DM (OD)/EC (RKI)</td>
                    <td rowSpan={2}>PD (DS)/DM (Lib)/EC (Lib)</td>
                    <td>PD (Lib)/DM (OD)/EC (RKI)</td>
                    <td rowSpan={2}>NET (BD)/ADV. JAVA (Lib)</td>
                    <td rowSpan={2}>ADV. JAVA (MV)/ .NET (Lib)</td>
                </tr>
                <tr>
                    <td>1:20 ΤΟ 2:10</td>
                   
                    <td>PD (Lib)/DM (OD)/EC (RKI)</td>
                    
                </tr>
                <tr>
                    <td>Class/Lab location</td>
                    <td>214/Elec. Machine Lab</td>
                    <td>118</td>
                    <td>214/Elec. Machine Lab</td>
                    <td>LL3</td>
                    <td>L15</td>
                </tr>

            </table>
        </div>);
    }
}
export default Timetable;