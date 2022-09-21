import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
    return (
        <div className='top'>
            <div className='text-container'>
                <div className='copyright'>
                    <span> No &#169; copyright issues.</span>
                    <p>Feel free to copy. if you need any help, ping me ! </p>
                </div>
                <div className='name'>
                    <h2 className='my-name'>Lakshay Sharma</h2>
                    <p>Made with &hearts; in India</p>
                </div>
                <div className='social'>
                    <p>Connect with me.</p>
                    <div className='social-links'>
                        <Link to='/'>
                            <img className='social-img' src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png' alt='social' />
                        </Link>
                        <Link to='/'>
                            <img className='social-img' src='https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png' alt='social' />
                        </Link>
                        <Link to='/'>
                            <img className='social-img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeCAMAAAD0W0NJAAAAdVBMVEUAd7f///8Ac7UAbrMAcLQAdbbc6/QkerlXlMX1+fuJtNWmx+D6/P2zz+SAsNTk7fVvoMo3hL0Aa7Iig73t9flKk8XM4O52qtBLjsJGiL9kn8vW5vErf7vB2OmbwNx4p8+WtdY4isAAZrB8osxrmsiuxd6kv9uilQerAAAE0UlEQVR4nO2dC3OrKhDHdQHz8I3GmMRHkub2+3/Eq017a6IgRm/Yc4b/nJkznVH704Vl2QVq2d/yQj/YJZZ2JbvAD70fKuv7/ywqOAXdbK2A8iLKHvDSPQWmm+tXDOg+/cVzcq6b6Fk8d37wnAPVTdMXPTh3vDRHSNfw5ekX3h6dZe/i+xYvQ/ntWtHMtrwIhTsZEkSeFRaIPMqjWBFaPtKW14r7VoC26TWNL7B2aJte0/h2FoIoQCzUcH++ACht/uGItZ7EKI9v58p1q3NkcWSEjJJjGW7uceEm9HNUgAB1aj8ou3E0Iwy1MvtZXkWR8NF12qNrdCpQGJgM0zV8MQI+OAjomga40m5ftjqJ6GzbJ7rx+FZMZ3tHzTEOFBK6pvlpNi//lOLZR629g8WOHC/TGmBDJKezba3GJdUYntbOQcoxvEqnb+FCl/wjra6PbMbwSp1dFzneuHFLnV2DSwbcu1ytbc8fw9OaWaDBGF6i0y+DKBT9Uao3azTml7V65ca68kE3PWiOl+V9t9KdcoOdxDOHTPtkg57FeLpj+UaMuyK6WvtMqBUIfHOAJE9Atl4fLjyi+HZWa99jL8niYyq+Ubo/db6gV64BQQKjI0J2n+UpTNMw87cXVOm9LzEgUBwOh3gFKNO3rVgr3RBGqNU0EMYAYKmmwvpSuqh/VUsFbFUkyaVRsmp+ntvTgBdxT9Zzap5A/6LYIk9PYuug8k+bzd2LeqlTukE+q1ACRRn25bjk4ZmkPg1dVV1/34Ly3HcGZgep4ybXVwchyAdG3FZOt3jORcmi7D+4Yh8KrmmH8Hr1GiDvFzW+1YmVIRa8QxN2fX1kuNYjqcLT8fpCP4GLMFzupG4lM063fQl6GM112XYZT/+AsBbiOb94RJwh96mkNvKocD05SFsCjzyX5ERKJweRC+DxWg2u1VS++XhczbJ3pfk0FzgfT1z1GuSbVqmbjecq9NmuykmV4tl4ownWZ03Kyc3Gm6wwnvD53o9nVxOychrwPEv982nAm/L5dOA56gsJdeBNqMNqwVMvhWnB84iqdbXg2RdV6y6NJ4yqH6Sc8V8Qz/O3H7fbR+2OlsLUFwEshucEQGg7ywXKY39kJFZeo7wUnr/q2Av4TT4xSteKjW8hvOCpL9JCbuFaMWxZBm977T3Xkkapn+/E8wdMRSNZJx664//CS9nQL+OyYnGpmLtaAm876CYgl9yiujprAbxwNfzoq6R3pO/DqwTtiMhq7YUS3QJ4Qh8mzH21UpxwzMdzhLU3me+7vAvPFY2fjEmmwIq7M+bjrYUelvwjvksxYJ6PJ+6DRLK2MlIbNmbjpeLfI3up/ZvwJJvfaC3uuu/CkywCkw2778LzX8RTC+d14SnmqQyewTN4Bs/gGTyDZ/AMnsEzeAbP4Bk8g2fwDJ7BM3gGz+AZvL8NL0eNx8QrJjr1fsk+XskmWdn2VdXtoeIVCd21JiB6ic1NXFpkVFjQVV4GxKAcNMHm3K3b0N0w30ZqJEgEi4FCyUv1+KLK7am6Pa7rofG5f5FbjewhgGLoLreasjWC3VdmPaq3AQmUruo/+6XbjKYK9fmFCfajKZEf7In8WFTkh8oiP5IX+YHG2I+Dxn6YNvKjyLEf5I79GHwb+R8RsLH+CYZ/AV5qamzAKl9JAAAAAElFTkSuQmCC' alt='social' />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer