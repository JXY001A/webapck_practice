/*
 * @description:
 * @author: JXY
 * @Date: 2019-12-30 21:21:55
 * @Email: JXY001a@aliyun.com
 * @LastEditTime : 2020-01-01 13:19:00
 */
class BasicPlugin{
    constructor() {
        console.log('new');
    }

    apply(complier){
        complier.plugin('emit', function(compilation, callback) {
            // 在生成文件中，创建一个头部字符串：
            var filelist = 'In this build:\n\n';

            // 遍历所有编译过的资源文件，
            // 对于每个文件名称，都添加一行内容。
            for (var filename in compilation.assets) {
              filelist += ('- '+ filename +'\n');
            }

            // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
            compilation.assets['filelist.md'] = {
              source: function() {
                return filelist;
              },
              size: function() {
                return filelist.length;
              }
            };

            callback();
          });

          complier.plugin('afterCompile', function(compilation) {
            // 在生成文件中，创建一个头部字符串：
            // var filelist = 'In this build:\n\n';

            console.log('')
            // callback();
          });
    }
}

module.exports = BasicPlugin;
