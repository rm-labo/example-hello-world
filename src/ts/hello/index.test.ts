import {hello} from './index'
const spyLog = jest.spyOn(console, 'log')
spyLog.mockImplementation(x => x)
describe('hello', () => {
  it('console-log-hello', () => {
    hello()
    expect(console.log).toBeCalled()
    expect(spyLog.mock.calls[0][0]).toEqual('Hello World!!')
  })
})