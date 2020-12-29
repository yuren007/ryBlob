# #!/usr/bin/env sh

# # 确保脚本抛出遇到的错误
# set -e

# # 生成静态文件
# npm run build

# # 进入生成的文件夹
# cd docs/.vuepress/dist

# # deploy to github
# # echo 'b.xugaoyi.com' > CNAME
# if [ -z "$GITHUB_TOKEN" ]; then
#   msg='deploy'
#   githubUrl=git@github.com:yuren007/ryBlob.git
# else
#   msg='来自github actions的自动部署'
#   githubUrl=https://yuren007:${GITHUB_TOKEN}@github.com/yuren007/ryBlob.git
#   git config --global user.name "yuren007"
#   git config --global user.email "ry930071257@outlook.com"
# fi
# git init
# git config --global user.name "yuren007"
# git config --global user.email "ry930071257@outlook.com"
# git add -A
# git commit -m "${msg}"
# git push -f $githubUrl master:gh-pages # 推送到github

# # deploy to coding
# # echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# # echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# # if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
# #   codingUrl=git@e.coding.net:xgy/xgy.git
# # else
# #   codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/xgy.git
# # fi
# # git add -A
# # git commit -m "${msg}"
# # git push -f $codingUrl master # 推送到coding

# # cd - # 退回开始所在目录
# # rm -rf docs/.vuepress/dist


#!/bin/zsh
# banqinghong@126.com
# 部署hugo到服务器
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build
server=47.52.197.23

# 进入目录生成静态文件
cd docs/.vuepress/dist
# hugo

# 将生成的文件拷贝至服务器Nginx配置的路径下
scp -r /Users/renyu/private/ryBlob/docs/.vuepress/dist/* root@${server}:/root/renyu/blog