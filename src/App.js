import { Field, Form } from "react-final-form";
import "./App.css";

const Comp = ({ input, meta }) => (
                  <>
                    {console.log("rendered")}
                    <input
                      placeholder="enter your comments"
                      type="text"
                      {...input}
                    />
                  </>
                )

function App() {
  return (
    <div className="App">
      <Form
        onSubmit={(e) => console.log(e)}
        validate={() => {}}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Exploring React Final Form</h2>
            <div>
              <Field
                name="fullName"
                component="input"
                placeholder="Enter full name"
              />
            </div>
            <h2>An Arbitrary Reusable Input Component</h2>
            <div>
              <label>Interests</label>
              <Field name="interests" component={Comp} />
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <label>Enter your email</label>
                    <input
                      type="email"
                      placeholder="example@some.com"
                      {...input}
                    />
                  </div>
                )}
              </Field>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
}

export default App;
