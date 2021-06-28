import { useState, useEffect } from 'react';
import '../scss/components/_speech-recognition.scss';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';


function SpeechRecognitionFunc() {

    const [isListening, setIsListening] = useState(false);
    const [note, setNote] = useState(null);
    const [savedNotes, setSavedNotes] = useState([]);

    useEffect(() => {
        handleListen();
    }, [isListening]);

    const handleListen = () => {
        if (isListening) {
            mic.start();
            mic.onend = () => {
                console.log('continue..');
                mic.start();
            }
        } else {
            mic.stop();
            mic.onend = () => {
                console.log('Stopped Mic on Click');
            }
        }
        mic.onstart = () => {
            console.log('Mics on');
        }
        
        mic.onresult = e => {
            const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
            console.log(transcript);
            setNote(transcript);

            mic.onerror = e => {
                console.log(e.error);
            }
        }
    }

    const handleSavedNote = () => {
        setSavedNotes([...savedNotes, note]);
        setNote('');
    }

    return (
        <div className="speech-container">
            <div className="box">
                <h2>Current Note</h2>
                {isListening ? <span>🎙</span> :
                <span>🛑🎙 </span>}

                <button onClick={handleSavedNote}disabled={!note}>Save Note</button>

                <button onClick={() => setIsListening(prevState => !prevState)}>Start/Stop</button>

                <p>{note}</p>
            </div>

            <div className="box">
                <h2>Notes</h2>
                {savedNotes.map(i => (
                    <p key={i}>{i}</p>
                ) )}    
            </div>
        </div>
    )
}

export default SpeechRecognitionFunc;
