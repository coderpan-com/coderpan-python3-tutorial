---
sidebar_position: 5
---

# 1.5 数据类型

变量可以保存不同类型（数据类型）的值。

Python中的数据类型很多，而且也允许我们自定义新的数据类型，这里我们需要先了解几种常用的数据类型。

Python 用 `type()` 函数可获得值的类型。

```pycon
>>> type(123)
<class 'int'>
>>>
>>> type(2.2)
<class 'float'>
>>>
>>> type('python')
<class 'str'>
>>>
>>> type(True)
<class 'bool'>
>>>
>>> v = 88 # 把值赋值给变量后，该变量就拥有了该值的类型
>>> type(v)
<class 'int'>
>>>
```

其中 class 后面引号中的词为值的类型。

Python 常用的内置数据类型：

- 数字
  - [int - 整型](../stdtypes/number.md)
    - [bool - 布尔型](../stdtypes/bool.md) 在 Python3 数据模型中[[1]](https://docs.python.org/zh-cn/3.11/reference/datamodel.html#numbers-integral) ， 布尔型为整形的子类型
  - [float - 浮点型](../stdtypes/number.md)
  - [complex - 复数](../stdtypes/number.md)，由实数部分和虚数部分构成，编程中几乎用不到。
- 文本序列
  - [str - 字符串](../stdtypes/str.md)
- 系列
  - [list - 列表](../stdtypes/list.md)
  - [tuple - 元组](../stdtypes/tuple.md)
  - [range - 等差数列](../stdtypes/range.md)
- 二进制系列
  - bytes - 字节
  - bytearray - 字节数组
  - memoryview - 内存视图]
- 集合
  - [set - 集合](../stdtypes/set.md)
  - [frozenset - 不可变集合](../stdtypes/set.md#frozenset)
- 映射
  - [dict - 字典](../stdtypes/dict.md)

| 类型           | 描述                                   | 示例                                            |
|--------------|--------------------------------------|-----------------------------------------------|
| 字符串  - str   | 文本字符，空格也是一个字符                        | 'Hello World!', '123', ''                     |
| 数字 - Number	 | 数值, int(整数) 和 float(小数)              | 1313，-323，0, 3.14                             |
| 布尔 - bool	   | 逻辑真假，整数的子类型，值只有 True, False 两个       |                                               |
| 列表 - list	   | 用方括号组织起来，每个元素用逗号隔开                   | [1, 2, 3], ['apple', 'orange', 'lemon']       |
| 元组 - tuple	  | 每个逗号隔开，可用（也可不用）小括号括起来，元组变量只读	        | a = 1, 2, 3 或 ('physics', 'math', 1997, 2000) |
| 字典 - dict	   | 每个键与其值使用一个冒号(:)分开，键-值对使用逗号分隔（无序、有索引） | {'name': 'Max', 'age': 7}                     |
| 集合 - set     | 无序、无索引                               | set([1, 1, 2, 2, 3, 3]), {'5元', '10元', '20元'} |

内置类型中还有不太常用的bytes（字节）、bytearray（字节数组）、memoryview（内存视图），[可点这里查看官方文档](https://docs.python.org/zh-cn/3/library/stdtypes.html#binary-sequence-types-bytes-bytearray-memoryview)

更多 Python 内置数据类型介绍请 [移步官网](https://docs.python.org/zh-cn/3/library/stdtypes.html) 阅读。