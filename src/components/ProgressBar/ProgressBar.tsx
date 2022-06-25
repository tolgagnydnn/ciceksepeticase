// Styles
import './style.scss'

interface ProgressBarInterface {
    percent: number
}

const ProgressBar = (props: ProgressBarInterface) => {
    // Props
    const { percent } = props

    return (
        <div className="progressbar">
            <div className='progressbar__progress'>
                <div className='progress-bar' style={{ width: percent + "%" }}></div>
            </div>
        </div>
    );
};

export default ProgressBar
