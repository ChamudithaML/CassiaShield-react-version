import React from 'react'
import './Home.css'

function Home() {
    return (
        <>
            <div className='hero-container'>
                <h1 className='hero-header'>CassiaShield</h1>
                <p className='desc'>Inovative Agriculture</p>
                <div className="opt-btns">
                    <button className='btn btn-primary btn-lg btn-wdth'>Find Disease</button>
                    <button className='btn btn-primary btn-lg btn-wdth'>Scan Disease</button>
                </div>
            </div>
            <div className='abt-main'>
                <div className='abt-cassia'>
                    <h3>About CassiaShield</h3>
                    <p>මෙම application එක මගින් කුරුඳු වගේවේ ඇතිවන රෝග සොයා ගැනීම සහ
                        එම රෝග වලක්වා ගන්නා ක්‍රම, ප්‍රතිකාර ක්‍රම ලබාදී ඇත. කුරුඳු වගාව ශ්‍රී ලංකාවේ
                        ඉතා ඉහලින් පවතින අපනයන බෝගයක් වන අතර වගාවේ ප්‍රමිතිය වැඩි කිරීම සහ වැඩි
                        පලදාවක් ලබාගැනීමට උපකාර වීම මෙම applicationයේ අරමුණ වී ඇත. <br></br><br></br>
                        Whether you're a seasoned farmer or just starting out, our app provides the tools
                        and resources you need to ensure the success of your cinnamon plantation.
                        Download now and experience the future of cinnamon farming!</p>
                </div>
            </div>
        </>

    )
}

export default Home;