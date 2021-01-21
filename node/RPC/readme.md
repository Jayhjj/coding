Remote Procedure Call (远程过程调用)

和Ajax 有什么相同点
1. 都是两个计算机之间的通信
2. 需要双方约定一个数据格式

和Ajax 有什么不同点
1. 不一定使用DNS作为寻址服务
2. 应用层协议一般不使用Http
3. 基于TCP或者UDP

# 寻址，负载均衡
- Ajax 使用DNS进行寻址
- RPC 使用特有服务进行寻址

- TCP通信方式
    - Ajax 单工通信
    - RPC  多种形式

- 二进制协议
    -Ajax Http (html,json)
    - RPC 二进制协议(更小的数据包体积，更快的编码速率)



# RPC 调用 Buffer编码解码二进制数据包

00 00 00    0000 0000  前三位代表一个字段 ，后两位也代表一个字段
write(x,0)  write(x,3) write(x,5)

protocol buffer

# RPC调用: net建立多路复用的RPC通道



