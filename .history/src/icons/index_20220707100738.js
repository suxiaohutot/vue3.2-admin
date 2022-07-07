import SvgIcon frmo '../components/SvgIcon/index.vue'

const svgRequest = require.context('./svg', false, /\.svg$/)
svgRequest.keys().forEach((item) => svgRequest(item))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}