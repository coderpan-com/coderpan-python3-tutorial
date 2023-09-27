---
tags: [Python, 快速入门]
---

# 潘哥 Python 3 教程： 快速入门

## 1. 教程简介

本教程目的是让有编程基础的程序员快速掌握 `Python` 编程基础。如果你有其它编程语言基础，想快速掌握 Python 编程基础，或者你想快速了解 Python 编程基础，此教程就是你的菜。
如果你没有编程基础，想深掌握 Python 编程基础，请阅读 [《潘哥 Python 3 教程：零基础入门详解》](../start/readme.md) 。

## 2. Python 简介

`Python` 是一门易于学习、功能强大的编程语言。它提供了高效的高级数据结构，还能简单有效地面向对象编程。`Python` 优雅的语法和动态类型以及解释型语言的本质，使它成为多数平台上写脚本和快速开发应用的理想语言。

`Python` [官网](https://www.python.org/)上免费提供了 `Python` 解释器和扩展的标准库，包括源码和适用于各操作系统的机器码形式，并可自由地分发。Python 官网还包含许多免费的第三方 `Python` 模块、程序和工具发布包及文档链接。

`Python` 解释器易于扩展，使用 `C` 或 `C++`（或其他 `C` 能调用的语言）即可为 `Python` 扩展新功能和数据类型。`Python` 也可用作定制软件中的扩展程序语言。

## 3. Python 优缺点

- 优点
  - 简单、明确、优雅
  - 动态类型及解释型语言
  - 易上手、开发效率高、代码易维护
  - 丰富的库
  - 规范的代码
  - 开源免费
- 缺点
  - 运行速度较慢（相对于 `C`），应扬长避短，用于对语言性能要求不是极高的领域。

## 4. 环境搭建

### 4.1 安装 Python 解释器

- Windows 安装， 打开 `Microsoft Store` 搜索 `Python`，点击安装即可。
- Mac 安装命令： `brew install python3`
- Ubuntu/Debian 安装命令： `sudo apt install python3`
- ReadHat/CentOS 安装命令： `sudo yum -y install python3`

### 4.2 安装代码编辑器

`VSCode`（Visual Studio Code）是一个跨平台、开源免费的代码编辑器，非常适合用来编写 Python 程序。
`PyCharm` 是当前最优秀的 Python IDE（集成开发环境），写 Python 程序推荐首先的 IDE，但它是收费的。

学习时推荐使用 `VSCode` 编写 Python 程序，
[VSCode 官方下载地址](https://code.visualstudio.com/download)。

## 5. 运行 Python 程序

### 5.1 交互模式

在终端运行 `python3`， 即可启动 `Python` 交互模式。
在 Python 解释器交互模式下，可以直接运行 `Python` 代码语句。

### 5.2 脚本模式

在终端运行 `python3 .py文件路径`，即可运行 `Python` 程序脚本。

## 6. 初识 Python 编程

打开终端，输入 python3，启动 Python 交互模式。

```pycon
python3
>>> print('Hello World!') # 程序显示 Hello, World! 文字
Hello, World!
```

## 7. 标识符

`标识符` 也称为 `名称`。

在编程语言中，我们需要用标识符来代指某个东西，这个东西可以是一个值，可以是一个函数，一个类，那么与之对应的就是变量名，函数名，类名等概念。

有效标识符字符为：

- 大小写字母（大小写 ASCII 或 Unicode 字符）、数字、下划线，但不能以数字开头。
- 标识符的长度没有限制，但区分大小写。
- 标识符名区分大小写。
- 不能用 Python 保留字（关键字、函数名）做标识符。

## 8. 关键字

`关键字` 又叫 `预留字`，是 Python 语言中一些已经被赋予特定意义的单词，Python 解释器用关键字来识别代码结构，所以它们不能用作标识符。

```text
False      await      else       import     pass
None       break      except     in         raise
True       class      finally    is         return
and        continue   for        lambda     try
as         def        from       nonlocal   while
assert     del        global     not        with
async      elif       if         or         yield
```

你无须记忆这些关键字。在多数开发环境中，关键字会以特殊颜色标识，所以如果将其误用作变量名时，很容易发现。

## 9. 变量及赋值

**变量**是内存中数据的引用，是用来引用一个值的名称。可以简单理解为：变量是值（数据）的标识符（名称）。

Python 的 `赋值语句` 是创建新的变量, 并给其一个值:

```pycon
# 将一个字符串赋值给了名为message 的变量;
>>> message = 'And now for something completely different'
# 将整数 17 赋值给了变量n;
>>> n = 17
# 将 π 的近似值赋给了pi
>>> pi = 3.14
```

## 10. 常用数据类型

Python 解释器主要内置的标准数据类型有：`数字`、`序列`、`映射`、`类`、`实例`和`异常`。

常用数据类型：

- 数字
  - [int - 整型](#整型-int)
    - [bool - 布尔型](#布尔型-bool) 
  - [float - 浮点型](#浮点型-float)
  - [complex - 复数](#复数-complex)
- 文本序列
  - [str - 字符串](#字符串-str)
- 系列
  - [list - 列表](#列表-list)
  - [tuple - 元组](#元组-tuple)
  - [range - 范围](#等差数列-range)
- 集合
  - [set - 集合](#集合-set)
  - [frozenset - 不可变集合](#不可变集合-frozenset)
- 映射
  - [dict - 字典](#字典-dict)

还有操作二进制数据的二进制序列类型（bytes, bytearray, memoryview），用的比较少，就不详细讲解了，如有需要可自行阅读Python 标准库的 [二进制序列类型](https://docs.python.org/zh-cn/3/library/stdtypes.html#binary-sequence-types-bytes-bytearray-memoryview) 文档。

**可变 & 不可变**：当变量的值发生了改变，该变量的内存地址不发生改变，这种数据类型称可变数据类型，反之为不可变数据类型。我们可以用 `id()` 函数来获得变量的内存地址，这样就可以检测到变量值改变了，内存地址是否改变。

- 可变数据类型：`list`, `set`, `dict`  
- 不可变数据类型：`数字`, `str`, `tuple`, `range`, `frozenset`

### 数字

#### 整型 (int)

Python 中可以处理任意大小的整数，仅受限于可用的内存 (包括虚拟内存)。包括正数和负数，在程序中的表示方法和数学的写法一样，例如：`1`，`100`，`-100`，`0` 等等。

而且除了支持十进制外，还支持二进制、八进制和十六进制的表示法，即我们可以使用二进制、八进制和十六进制来代表整数，前缀 0x，0o 和 0b 分别表示 16、8、2 进制：

```pycon
>>> number = 0b100 # 二进制
>>> number
4
>>> number = 0xFF # 十六进制
>>> number
255
>>> number=0o37 # 八进制
>>> number
31
```

对于很大的数，例如 `10000000000`，很难数清楚 0 的个数。Python 允许在（所有进制）数字中间以 `_` 分隔，因此，写成 `10_000_000_000` 和 `10000000000` 、`0b100_101` 和 `ob100101` 是完全一样的。int/float/complex 3 种数字类型都支持 '_' 分隔。

#### 浮点型 (float)

浮点数也就是小数，之所以称为浮点数，是因为按照科学记数法表示时，一个浮点数的小数点位置是可变的，浮点数除了数学写法（如 `123.456`）之外还支持科学计数法，如 `2.5e2`。
浮点数也支持

#### 复数 (complex)

由实数部分和虚数部分构成，可以用`a + bj`,或者 `complex(a,b)` 表示， 复数的实部a和虚部b都是浮点型。

普通编程中几乎用不到复数，一般专业数学计算才用的。

#### 布尔型 (bool)

Python 的 `bool` 数据类型只有两个值，分别是表示逻辑值的 `True` 和 `False`，他们表示真与假，对与错，是与否等逻辑。

Python 3 中，布尔类型是整型的子类型，两个布尔值在各种场合的行为分别类似于数值 `0` 和 `1`，例外情况只有在转换为字符串时分别返回字符串 `False` 或 `True`。

```pycon
# Python 3 中，1 和 True 相等，0 和 False 相等
>>> 1 == True
True
>>> 1.0 == True
True
>>> True + 1  # True == 1
2
>>> False * 10  # False == 0
0
>>>
>>> 0 == False
True
>>> 0.0 == False
True
```

用 `bool(x)` 函数可以把其他数据类型转换成布尔型。

内置数据类型中，只有值为以下列出的，转换成布尔型后才是 `False`，其他的都是 `True`。

- 被定义为假值的常量: `None` 和 `False`
- 任何数值类型的零: `0`, `0.0`, `0j`, `Decimal(0)`, `Fraction(0, 1)`
- 空的序列和多项集: `''`, `()`, `[]`, `{}`, `set()`, `range(0)`
- 类的对象特殊方法 `__bool__()` 返回 `False` 或是定义了 `__len__()` 方法且返回 `0`

```pycon
>>> bool(1)
True
>>> bool(2)
True
>>> bool([1, 2])
True
>>> bool(0)
False
>>> bool(0.0)
False
>>> bool('')
False
>>> bool([])
False
>>> bool({})
False
```

### 字符串 (str)

Python 可以操作文本（由 `str` 类型表示，称为“`字符串`”）。

`字符串`是一行或多行文本内容，是文本序列类型。

#### 字符串的创建

- 字符串用单引号 `'` 或双引号 `"` 括起来。
- 可以用三重引号（`"""..."""` 或 `'''...'''`）创建多行字符串（也可以用来做多行注释）。
- 用反斜杠 `\` 转义特殊字符，在字符串前面添加一个 `r` 表示原始字符串（有 `\` 将不转义）。
- 在字符串前面加一个 `f` 表示格式化字符串，字符串中可通过大括号引用变量。
- 反斜杠 (`\\`) 可以作为续行符，表示下一行是上一行的延续。

```pycon
>>> a = 'Hello' # 定义字符串变量
>>> b = "World" # 定义字符串变量
>>> name = 'LiLei'
>>> f"My name is {name}" # 格式化字符串
>>>
>>> print('Ru\noob') # \n 换行
Ru
oob
>>> print(r'Ru\noob') # r在前面
Ru\noob
>>>
# \ 作为续行符
>>> 'Hello\
... World\
... !'
'HelloWorld!'
>>>
>>> 'Hello'\
... 'World'\
... '!'
'HelloWorld!'
>>> '''
... Hello
... World'''
'\nHello\nWorld'
>>>
>>> '''\
... Hello
... World'''
'Hello\nWorld'
>>>
>>> """\
... Hello
... World"""
'Hello\nWorld'
```

#### 字符串的运算

| 操作符                | 描述                                           |
|--------------------|----------------------------------------------|
| `+`                | 字符串连接                                        |
| `*`                | 重复字符串                                        |
| `[]`               | 通过索引访问字符串的字符，索引可以是负数                         |
| `[start:end]`      | 切片操作，截取字符串指定范围                               |
| `[start:end:step]` | 切片操作，`step` 为切片间隔                            |
| `in`               | 成员运算符 - 如果字符串中包含给定的字符返回 `True`，否则返回 `False`  |
| `not in`           | 成员运算符 - 如果字符串中不包含给定的字符返回 `True`，否则返回 `False` |
| `%`                | 格式化字符串                                       |

```pycon
>>> a = 'Hello' # 定义字符串变量
>>> b = 'World'
>>> a + b # 连接字符串
'HelloWorld'
>>> a * 3 # 字符串重复
'HelloHelloHello'
>>> a[0] # 索引访问
'H'
>>> a[1:4] # 切片
'ell'
>>> a[2:] # 切片省略结尾索引，表示取到末尾
'llo'
>>> a[:3] # 切片省略开始，表示从 0 开始
'Hel'
>>> a[:-2] # 切片下标可以是负数
'Hel'
>>> a[:100] # 索引超过则取到末尾
'Hello'
>>> x = '123456789'
>>> x[1:8:2] # 指定切片间隔
'2468'
>>> x[::2] # 省略切片开始、结束下标，表示取整个字符串
'13579'
>>> x[::-2] # 间隔数为复数则是反转字符串后再按间隔截取
'97531'
>>> x[::-1]
'987654321'
>>>
>>>
>>> 'He' in a
True
>>> 'He' in b
False
>>> 'He' not in b
True
```

> [官方文档：常见的字符串操作](https://docs.python.org/zh-cn/3/library/string.html)

#### % 格式化字符串

python提供了很多字符串格式化符号，用以格式生成不同类型的数据

| 符号 | 描述                 |
|----|--------------------|
| %c | 字符及其ASCII码         |
| %s | 字符串                |
| %d | 整数                 |
| %u | 无符号整型              |
| %o | 无符号八进制数            |
| %x | 无符号十六进制数           |
| %X | 无符号十六进制数（大写）       |
| %f | 浮点数字，可指定小数点后的精度    |
| %e | 用科学计数法格式化浮点数       |
| %E | 作用同%e，用科学计数法格式化浮点数 |
| %g | %f 和 %e 的简写        |
| %G | %f 和 %E 的简写        |
| %p | 用十六进制数格式化变量的地址     |

```pycon
>>> s = '我是%s'
>>> s % '李雷' # % 格式化字符串
'我是李雷'
>>> s = '我是%s, 今年%d岁'
>>> s % ('李雷', 18) # % 多个参数用括号括起来
'我是李雷, 今年18岁'
```

#### format 方法格式化字符串

字符串里希望被替换的参数名，用大括号括起来，在 `format` 方法的参数里设置替换的参数。  
此方式可读性比 `%` 格式化可读性更好。

```pycon
>>> '我是{name}, 今年{age}岁'.format(name='李雷', age=18)
'我是李雷, 今年18岁'
```

#### f-string

`f-string` 是字面量格式化字符串。

在字符串前面加上 `f` 字符，自动将变量内容填充到字符串中，以达到格式化字符串的目的。

```pycon
>>> name = '李雷'
>>> age = 18
>>> f'我叫{name}, 今年{age}岁'
'我叫李雷, 今年18岁'
```

### 参考
- [Python 标准库 » 内置类型](https://docs.python.org/zh-cn/3/library/stdtypes.html)

## 数据类型转换

有时候，我们需要对数据内置的类型进行类型的转换，你只需要将数据类型作为函数名即可。

以下几个内置的函数可以执行数据类型之间的转换。这些函数返回一个新的对象，表示转换的值。

| 函数                                                                 | 描述                              |
|--------------------------------------------------------------------|---------------------------------|
| `int(x, base = 10)`                                                | 将 `x` 转换为一个整数                   |
| `float(x)`                                                         | 将 `x` 转换到一个浮点数                  |
| `complex(real [,imag])`                                            | 创建一个复数                          |
| `str(x)`                                                           | 将对象 `x` 转换为字符串                  |
| `repr(x)`                                                          | 将对象 `x` 转换为表达式字符串               |
| `eval(str)`                                                        | 用来计算在字符串中的有效 Python 表达式,并返回一个对象 |
| `tuple(s)`                                                         | 将序列 `s` 转换为一个元组                 |
| `list(s)`                                                          | 将序列 `s` 转换为一个列表                 |
| `set(s)`                                                           | 转换为可变集合                         |
| `dict(**kwarg)` `dict(mapping, **kwarg)` `dict(iterable, **kwarg)` | 创建一个字典。                         |
| `frozenset(s)`                                                     | 转换为不可变集合                        |
| `chr(x)`                                                           | 将整数转换为字符                        |
| `ord(x)`                                                           | 将字符转换为它的整数值                     |
| `hex(x)`                                                           | 将整数转换为十六进制字符串                   |
| `oct(x)`                                                           | 将整数转换为八进制字符串                    |

## 参考资料

- [`Python` 官方教程](https://docs.python.org/zh-cn/3/tutorial/index.html)
- [`Python` 语言参考手册](https://docs.python.org/zh-cn/3/reference/index.html)
- [`Python` 标准库文档](https://docs.python.org/zh-cn/3/library/index.html)

