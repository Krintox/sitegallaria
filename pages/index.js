import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
// import {ques} from '../public/question-ss.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='main-div'>
      <nav>
        <p>DEMO ONLINE TEST</p>
      </nav>
      <div className='main-section'>
        <div className='question-section'>
          <div className='subject-toggle'>
            <div className='wrapper-div'>
              <div className='button-div all-div'>
                <button className='clr-btn-all-secs'>
                  All Sections
                </button>
              </div>
              <div className='button-div phy-div'>
                <button className='clr-btn-all'>
                  PHYSICS
                </button>
              </div>
              <div className='button-div chem-div'>
                <button className='clr-btn-all'>
                  CHEMISTRY
                </button>
              </div>
              <div className='button-div math-div'>
                <button className='clr-btn-all'>
                  MATHS
                </button>
              </div>
            </div>
          </div>
          <div className='question-wrapper-div'>
            <div className='qno1-div'>
              <div>Q No.: 1</div>
              <div>
              <label for="cars">View In:</label>
              <select id="cars">
                <option value="volvo">English</option>
                <option value="saab">Hindi</option>
                <option value="opel">Telugu</option>
                <option value="audi">Tamil</option>
              </select>
              </div>
            </div>
            <div className='sub-ques'>
              <div className='ques-inst'>
                <p className='question-p'>QUESTION INSTRUCTION</p>
                <p>
                  Polywrap is a protocol layer of the Ethereum blockchain that provides an easy-to-use and secure way to interact with smart contracts. It is specifically 
                  designed for web applications, and its main purpose is to provide a secure and seamless user experience. Polywrap works by creating a layer between the 
                  user and the smart contract, allowing the user to interact with the contract without having to deal with complex cryptography. The protocol also provides 
                  a secure way to store data, along with access rules to control who can access the data. It also offers a set of tools to help developers
                </p>
              </div>
              <div className='ques-set'>
                <p className='question-p'>QUESTION</p>
                <Image
                  src= '/question-ss.png'
                  alt='Picture of the author'
                  width='420'
                  height='220'
                />
                <div className='option-view'>
                  <div className='option-view-wrapper'>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label for="html">
                      
                      <Image
                        src= '/optionA.jpeg'
                        alt='Picture of the author'
                        width='180'
                        height='70'
                      />                      
                    </label><br />
                  </div>
                  <div className='option-view-wrapper'>
                  <input type="radio" id="css" name="fav_language" value="CSS" />
                  <label for="css">
                    
                    <Image
                      src= '/optionB.jpeg'
                      alt='Picture of the author'
                      width='180'
                      height='70'
                    />      
                  </label>
                  </div><br />
                  <div className='option-view-wrapper'>
                  <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                  <label for="javascript">
                    
                    <Image
                      src= '/optionC.jpeg'
                      alt='Picture of the author'
                      width='180'
                      height='70'
                    />      
                  </label>
                  </div> <br />
                  <div className='option-view-wrapper'>
                  <input type="radio" id="python" name="fav_language" value="Python" />
                  <label for="javascript">
                    
                    <Image
                      src= '/optionD.jpeg'
                      alt='Picture of the author'
                      width='180'
                      height='70'
                    />      
                  </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='op-btns'>
              <div className='pallete-para profinst-child child-1'>CLEAR RESPONSE</div>
              <div className='pallete-para profinst-child'>REVIEW</div>
              <div className='pallete-para profinst-child'>DUMP</div>
              <div className='pallete-para profinst-child'>PREVIOUS</div>
              <div className='pallete-para profinst-child'>NEXT</div>
          </div>
        </div>
        <div className='ques-progress'>
          <div className='image-and-time'>
            <div className='image-pp'>
                <Image
                  src= '/question-ss.png'
                  alt='Picture of the author'
                  width='80'
                  height='100'
                />
            </div>
            <div className='time-and-name'>
              <div className='time-left'>
                <p>Time <br />Left:</p>
                <p className='time-para'>02:39:29</p>
              </div>
              <div className='name-participant'><br></br>
                Ashish Kumar
              </div>
            </div>
          </div>
          <div className='ques-pallete'>
            <div className='pallete-para'><p>Question Pallete</p></div>
            <div className='ques-nav'>
                <div className='ques-no one'>1</div>
                <div className='ques-no two'>2</div>
                <div className='ques-no three'>3</div>
                <div className='ques-no four'>4</div>
                <div className='ques-no five'>5</div>
                <div className='ques-no six'>6</div>
                <div className='ques-no seven'>7</div>
                <div className='ques-no eight'>8</div>
                <div className='ques-no nine'>9</div>
                <div className='ques-no ten'>10</div>
            </div>
          </div>
          <div className='legend'>
            <div className='pallete-para'><p>Legend(Click to view)</p></div>
            <div className='answer-stats'>
              <div className='answer-view given'>4 answer</div>
              <div className='answer-view no'>2 No answer</div>
              <div className='answer-view revans'>1 review+ans</div>
              <div className='answer-view revminusans'>1 review-ans</div>
              <div className='answer-view dump'>1 dump</div>
              <div className='answer-view novis'>1 no visit</div>
            </div>
            <div className='10-ques pallete-para'>
              <p>10 All Questions</p>
            </div>
            <div className='profile_inst'>
              <div className='profinst-wrapper'>
                <div className='profinst-child'>Profile</div>
                <div className='profinst-child'>Instr</div>
                <div className='profinst-child'>Questions</div>
                <div className='profinst-child'>Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className='footer'>
      <p>&copy Addmen</p>
    </div>
    </div>
  )
}
