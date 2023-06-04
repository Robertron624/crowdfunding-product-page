import './project-stats.scss'

const ProjectStats = () => {
  return (
    <div className='project-stats'>
        <div className="stats">
            <div className="stat">
                <div className="values">
                    <div className="value">$89,914</div>
                    <div className="type">of $100,000 backed</div>
                </div>
            </div>
            <div className="stat">
                <div className="values">
                    <div className="value">5,007</div>
                    <div className="type">total backers</div>
                </div>
            </div>
            <div className="stat">
                <div className="values">
                    <div className="value">56</div>
                    <div className="type">days left</div>
                </div>
            </div>
        </div>
        <div className="progress">
                <div className="progress-bar">
                    <div className="progress-bar-fill"></div>
            </div>
        </div>
    </div>
  )
}

export default ProjectStats