import { useAuth0 } from "@auth0/auth0-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import userService from "../services/userService";

export default function WelcomePage() {
    let navigate = useNavigate();
    const { user } = useAuth0();
    const initialValues = {
        firstName: user?.given_name,
        lastName: user?.family_name,
        birthday: "",
        email: user?.email,
        phoneNumber: user?.phone_number,
        privacyPolicyAccepted: false,
    };

    const onSubmit = async (values) => {
        try {
            const { privacyPolicyAccepted, ...welcomeForm } = values;
            await userService.saveUser(welcomeForm)
            navigate(0)
        } catch (error) {
            console.log(error);
        }
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        birthday: Yup.date().required("Birthday is required"),
        email: Yup.string().required("Email is required"),
        phoneNumber: Yup.string().required("Phone number is required"),
        privacyPolicyAccepted: Yup.boolean().oneOf([true], "Required"),
    });

    return (

        <div className="container Bgg">
            <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="container col-8 bg-glass">
                        <div className="form-group">
                            <label htmlFor="email" className="mt-5 text-black">Email</label>
                            <Field type="text" name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger fw-bold display-6" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName" className="mt-3 text-black">First Name</label>
                            <Field type="text" name="firstName" className="form-control" />
                            <ErrorMessage name="firstName" component="div" className="text-black fw-bold display-6" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="mt-3 text-black">Last Name</label>
                            <Field type="text" name="lastName" className="form-control" />
                            <ErrorMessage name="lastName" component="div" className="text-danger fw-bold display-6" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthday" className="mt-3 text-black">Birthday</label>
                            <Field type="date" name="birthday" className="form-control" />
                            <ErrorMessage name="birthday" component="div" className="text-danger fw-bold display-6" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber" className="mt-3 text-black">Phone Number</label>
                            <Field type="text" name="phoneNumber" className="form-control" />
                            <ErrorMessage name="phoneNumber" component="div" className="text-danger fw-bold display-6" />
                        </div>
                        <div className="form-group form-check">
                            <Field
                                type="checkbox"
                                name="privacyPolicyAccepted"
                                className="form-check-input"
                                id="privacyPolicyAccepted"
                            />
                            <label htmlFor="privacyPolicyAccepted" className="mt-3 form-check-label text-red">
                                I accept the Privacy Policy
                            </label>
                            <ErrorMessage
                                component="div"
                                name="privacyPolicyAccepted"
                                className="text-danger"
                            />
                        </div>

                        <button type="submit" className="mt-3 btn btn-primary" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </Container>
        </div>
        
    );
}