import  "./stories.css"
import React from 'react'

const Stories = () => {
  return (
    <div className="stories">
        <div className="storiesinfo">
          <p className="storiestitle">Black Phone </p>
          <p className="storiesdes">The Black Phone is a 2021 American coming-of-age
                                    supernatural horror film directed by Scott Derrickson
                                    and written by Derrickson and C. Robert Cargill, who
                                    both produced with Jason Blum. It is an adaptation of 
                                    the 2004 short story of the same name by Joe Hill.
                                    The film stars Mason Thames, Madeleine McGraw, Jeremy
                                    Davies, James Ransone, and Ethan Hawke. In the film,
                                    an abducted teenager (Thames) uses a mysterious telephone
                                    to communicate with the previous victims of his deranged 
                                    captor (Hawke).
          </p>
          
          <div className="storiescatdate">
            <p className="storiescat">Hollywood</p>
            <p className="storiesdate">/ 02 oct 2022</p> 
          </div>
        </div>
    </div>
  )
}

export default Stories;