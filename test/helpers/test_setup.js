import 'babel-register'
import jsdom from 'jsdom'
import 'babel-polyfill'
import { expect } from 'chai'
import sinon from 'sinon'
import { render, shallow, mount } from 'enzyme'

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
global.expect = expect
global.sinon = sinon
global.shallow = shallow
global.mount = mount
global.render = render
