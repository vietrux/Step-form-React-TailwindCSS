import { useState } from 'react';

type AnswerElementType = {
  type: string;
  placeholder?: string;
  value?: string;
  options?: string[];
}

function AnswerElement(props: AnswerElementType) {
  if (props.type === 'text') {
    return (
      <>
        <input className="border-b border-indigo-600 w-full text-lg focus:outline-none" placeholder={props.placeholder} />
      </>
    )
  }
  if (props.type === 'select') {
    return (
      <>
        <select className="w-full pb-1 pt-2 focus:outline-none border-b border-indigo-600">
          {
            props.options?.map((option, index) => {
              return <option key={index} value={option}>{option}</option>
            }
            )
          }

        </select>
      </>
    )
  }
  if (props.type === 'radio') {
    return (
      <>
        <div className="flex flex-col">
          {
            props.options?.map((option, index) => {
              return (
                <label className='flex flex-row' key={index}>
                  <input type="radio" name="radio-ques-id" /><p className="pl-2">{option}</p>
                </label>
              )
            })
          }
        </div>
      </>
    )
  } else {
    return <div>Unknown</div>
  }
}

function App() {
  type listquestionsType = {
    type: string;
    question: string;
    placeholder?: string;
    options?: string[];
  }
  const listquestions:listquestionsType[] = [
    {
      type: "text",
      question: "Hãy nhập tên của bạn",
      placeholder: "Ví dụ: Nguyễn Văn A",
    },
    {
      type: "select",
      question: "Hãy chọn giới tính của bạn?",
      options: ["Nam", "Nữ", "Khác"],
    },
    {
      type: "text",
      question: "Hãy nhập tuổi của bạn",
      placeholder: "Ví dụ: 20",
    }
  ]

  const [ques_id, setQues_id] = useState(0);

  return (
    <div className="flex flex-row">
      <div className="w-1/2 h-screen">
        <div className="grid grid-cols-1 place-content-center h-screen">
          <div className="text-center p-8">
            <div id="question" className='p-8 text-left'>
              <p className="text-lg pr-2">{ques_id + 1} / {listquestions.length}</p>
              <h1 className="text-2xl font-bold">
                {listquestions[ques_id].question}
              </h1>
            </div>
            <div id="answer" className="flex px-8">
              <AnswerElement
                type={listquestions[ques_id].type}
                placeholder={listquestions[ques_id].placeholder}

              />
            </div>
            <div id="submit" className="flex px-8 py-2">
              {
                ques_id > 0 ? <button className='mt-4 border border-slate-400 px-8 py-2 mr-4 rounded-md bg-sky-700 hover:bg-sky-500 text-white font-bold'
                onClick={
                  () => {
                    setQues_id(ques_id - 1)
                  }
                }
                >Quay lại</button> : null
              }
              <button className='mt-4 border border-slate-400 px-8 py-2 rounded-md bg-sky-700 hover:bg-sky-500 text-white font-bold'
                onClick={
                  () => {
                    if (ques_id < listquestions.length - 1) {
                      setQues_id(ques_id + 1)
                    }else{
                      alert("Đã hoàn thành")
                    }
                    
                  }
                }
              >{
                  ques_id === listquestions.length - 1 ? "Xong" : "Tiếp theo"
                }</button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/2 h-screen'>
        <img src="https://hmc-function.web.app/static/media/default-firstframe.728bff8cf40c34371aa3.jpg" className="h-screen" alt="idontknow"/>
      </div>
    </div>
  );
}

export default App;
