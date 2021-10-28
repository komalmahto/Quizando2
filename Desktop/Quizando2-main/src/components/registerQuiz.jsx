import React, { useEffect } from "react"
import "../styles/components/registerQuiz.css"
import { USER_SERVER } from "../config"
import { Button } from "@mui/material"
import { useParams, useHistory } from "react-router-dom"
import axios from "axios"
import ClearRoundedIcon from "@mui/icons-material/ClearRounded"
import WarningRoundedIcon from "@mui/icons-material/WarningRounded"
function RegisterQuiz() {
  let { quizId } = useParams()
  let history = useHistory()

  const goToPreviousPath = () => {
    history.goBack()
  }
  /* eslint-disable */
  const key = "93183bfbec25fe370ee6d69163ca9f1b5c1d57ed1352261007c35c63d32a8e43"
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTViOGJlOGJjMzFkMjA2MDljNGNlOSIsImlhdCI6MTYzNTM1MzU5NiwiZXhwIjoxNjQzMTI5NTk2fQ.n7fmp-hw9Zh54qIs_W2ZcdfEfJg-KV1IDnH1LSg8ETU"
  useEffect(() => {
    const Fetch = async () => {
      const Res = await axios.post(
        "http://13.233.83.134:8010/quiz/register?apiKey=93183bfbec25fe370ee6d69163ca9f1b5c1d57ed1352261007c35c63d32a8e43&quizId=616ef5f34df1e3662545a31b",
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      )
      console.log(Res.data)
      console.log("data")
    }
    Fetch()
  }, [])
  console.log("data1")
  return (
    <div className="blurBackground">
      <div className="registerContainer">
        <div className="registerWrapper">
          <div className="cancleRegister" onClick={goToPreviousPath}>
            <ClearRoundedIcon fontSize="large" />
          </div>
          <div className="header">Registration Successful</div>
          <div className="body">
            <h4>
              Thats's right, have a go on this quiz for free.It wont't cost you
              any tokens.But your score will still count on the leaderboard and
              you couldstill win a share of the cash prize!How cool is that!
            </h4>
            <br />
            <h4>
              By clicking Continueyou are aggering to the Quizando{" "}
              <a
                style={{
                  textDecoration: "none",
                }}
                href=""
              >
                Terms and Conditions
              </a>
            </h4>

            <button className="continueButtonFinal">
              <a
                style={{
                  color: "var(--light)",
                  fontFamily: "Paytone One",
                  textDecoration: "none",
                }}
                href={`/playQuiz/classic/${quizId}`}
              >
                Continue
              </a>
            </button>
          </div>

          <div className="registerfooter">
            <WarningRoundedIcon fontSize="medium" />
            <h4>
              <b>
                <span>WARNING!</span>{" "}
              </b>
              to ensure optimum performance of the quiz platform,{" "}
              <b>
                <span className="bold">DO NOT</span>{" "}
              </b>{" "}
              have any other window tabs or software runnung in background{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterQuiz
