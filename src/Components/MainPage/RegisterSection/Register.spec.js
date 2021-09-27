import { shallow } from 'enzyme'
import '../../../setupTest'
import RegisterSection from './index'
import App from '../../../App'
import { Provider } from "react-redux";
import store from '../../../state/store'

import { render, fireEvent } from '@testing-library/react'


const findByTestData = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

const setUp = () => {
    const wrapper = shallow
    (<Provider store={store}><RegisterSection /></Provider>)
    return wrapper
}


describe("login", () => {
    beforeEach(() => {

        wrapper = setUp()
    });

    test("Name input exist", () => {

        const inputName = findByTestData(wrapper, 'name')
        expect(inputName.length).toBe(1)
    })

    test("Last_name input exist", () => {

        const inputLast_name = findByTestData(wrapper, 'last_name')
        expect(inputLast_name.length).toBe(1)
    })

    test("email input exist", () => {

        const inputEmail = findByTestData(wrapper, 'email')
        expect(inputEmail.length).toBe(1)
    })

    test("password input exist", () => {

        const inputPassword = findByTestData(wrapper, 'password')
        expect(inputPassword.length).toBe(1)
    })

    test("repeat_password input exist", () => {

        const inputRepeat_password = findByTestData(wrapper, 'repeat_password')
        expect(inputRepeat_password.length).toBe(1)
    })
})


