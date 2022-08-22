import { Form, Field } from "react-final-form";
import { validateThreePagesCount } from "../../lib/validations";
import { ChessInput, ChessButton } from "./FormElements";

export default function NewThreeForm({onSubmit, initialValues}) {
    return <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={values => {
            const errors = {};
            if(!validateThreePagesCount(values.pages).isValid) errors.pages = "Invalid value! Must be number between 2 and 24."
            return errors;
        }}>
        {props => (
            <form onSubmit={props.handleSubmit}>
                <div className="flex flex-row mb-4">
                    <Field name="texas">
                            {({input, meta}) => (
                                <div className="flex flex-col flex-none">
                                    <div>
                                        <label className="text-lg font-bold">Text:</label>
                                        <ChessInput {...input} className="w-96 ml-2" placeholder="First text line for your three..." />
                                    </div>
                                    {meta.error && meta.touched && <div>{meta.error}</div>}
                                </div>
                            )}
                    </Field>
                    <Field name="observatoryName">
                            {({input, meta}) => (
                                <div className="flex flex-col flex-none">
                                    <div>
                                        <label className="text-lg font-bold">Observatory:</label>
                                        <ChessInput {...input} className="w-96 ml-2" placeholder="" />
                                    </div>
                                    {meta.error && meta.touched && <div>{meta.error}</div>}
                                </div>
                            )}
                    </Field>
                    <Field name="pages">
                            {({input, meta}) => (
                                <div className="flex flex-col flex-none">
                                    <div>
                                        <label className="text-lg font-bold">Pages:</label>
                                        <ChessInput {...input} className="w-96 ml-2" placeholder="" />
                                    </div>
                                    {meta.error && meta.touched && <div>{meta.error}</div>}
                                </div>
                            )}
                    </Field>
                </div>

                <ChessButton type="submit">Submit</ChessButton>
            </form>
        )}
    </Form>
}