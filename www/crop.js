module.exports = function cropAsync (image, width, height) {
  return new Promise(function (resolve, reject) {
    width = width || 240
    height = height || 240
    cordova.exec(resolve, reject, 'CropImagePlugin', 'cropImage', [image, width, height])
  })
}