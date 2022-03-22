# 语义（Semantic）
语义到底是什么?  
HTML中的语义是通过使用适当的元素为页面内容赋予意义和结构的实践。
语义代码描述页面上内容的值，而不考虑内容的样式或外观。使用语义元素有几个好处，
包括使计算机、屏幕阅读器、搜索引擎和其他设备能够充分阅读和理解网页上的内容。
此外，语义HTML更容易管理和使用，因为它清楚地显示了每一段内容的内容。
接下来，随着新元素的引入，我们将讨论这些元素的实际含义以及它们最好表示的内容类型。
在此之前，让我们先看看两个元素\<div>s和\<span>s，它们实际上不包含任何语义值。
它们的存在只是为了样式目的。
# Divisions 和 Spans
\<div>s和\<span>s是作为容器的HTML元素，仅用于样式化目的。作为通用容器，它们不具有任何总体意义或语义值。
段落是语义的，因为包装在\<p>元素中的内容被认为是一个段落。\<div>s和\<span>s没有任何这样的含义，只是简单的容器。
## Block和Inline
大多数元素是block或inline-level元素。  

Block-level element从新行开始，将一个堆叠在另一个之上，并占据任何可用宽度。
Block-level element可以相互嵌套，并且可以包装inline-level element。最常看到用于较大内容的Block-level element是段落。  

Inline-level element不会从新行开始。它们落入文档的正常流程中，一个接一个地排成一排，只保持其内容的宽度。
Inline-level element可以相互嵌套，但是它们不能包装Block-level element。通常看到具有较小内容的Inline-level element通常是一些单词。
## HTML和CSS中的注释
HTML和CSS让我们能够在代码中留下注释，任何在注释中包装的内容都不会显示在网页上。
注释帮助我们组织文件，允许我们设置提醒，并为我们提供一种更有效地管理代码的方法。
当多人处理同一个文件时，注释变得特别有用。

HTML注释以。CSS注释以\/*开头，以\*/结尾。

# 使用基于文本（Text-Based）的元素
网络上存在着许多不同形式的媒体和内容，然而，文本占主导地位。相应地，在网页上显示文本有许多不同的元素。
现在，我们将关注更流行的元素，包括标题、段落、显示重要性的粗体文本和强调的斜体。
## Headings
Headings是Block-level element，它们有六个不同的等级，从 \<h1> 到 \<h6>。 
标题有助于快速分解内容并建立层次结构，它们是用户阅读页面的关键标识符。它们还帮助搜索引擎索引和确定页面上的内容。

标题的使用顺序应与页面内容相关。 页面或部分的主标题应使用 \<h1> 元素标记，后续标题应根据需要使用
\<h2>、\<h3>、\<h4>、\<h5> 和 \<h6> 元素。

每个标题级别都应该在语义上有价值的地方使用，并且不应该用于使文本变粗或变大——还有其他更好的方法可以做到这一点。
这是所有不同标题级别的 HTML 示例以及网页上的结果显示。
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>

## Paragraphs
Headings后面通常是paragraphs, paragraphs使用\<p> block-level element定义。
paragraphs可以一个接一个地出现，根据需要在页面上添加信息。下面是一个如何设置段落的例子。

\<p>Steve Jobs was a co-founder and longtime chief executive officer at Apple. On June 12, 2005, Steve gave the commencement address at Stanford University.\</p>

\<p>In his address Steve urged graduates to follow their dreams and, despite any setbacks, to never give up&ndash;advice which he sincerely took to heart.\</p>
## Bold Text with Strong
要使文本加粗并突出其重要性，我们将使用\<strong> inline-level element。有两个元素将显示粗体文本:\<strong>和\<b>元素。

\<strong> 元素在语义上用于赋予文本高度重要性，因此是最流行的加粗文本选项。
另一方面，\<b> 元素在语义上意味着在风格上偏移文本，这并不总是值得突出关注的文本的最佳选择。
我们必须衡量我们希望设置为粗体的文本的重要性，并相应地选择一个元素。
## Italicize Text with Emphasis
为了使文本斜体，从而强调它，我们将使用 \<em> inline-level element。
与粗体文本的元素一样，有两个不同的元素会使文本变为斜体，每个元素的语义都略有不同。 

\<em> 元素在语义上用于强调文本，它是最流行的斜体文本选项。 
\<i> 元素，用于在语义上以另一种声音或语气传达文本，几乎就像它被放在引号中一样。
同样，我们需要衡量我们想要斜体的文本的重要性并相应地选择一个元素。

# Building Structure
HTML5 引入了新的基于结构的元素，包括 \<header>、\<nav>、\<article>、\<section>、\<aside> 和 \<footer> 元素。
所有这些新元素都旨在为我们的页面组织赋予意义并改善我们的结构语义。它们都是block-level element，没有任何隐含的位置或样式。
此外，所有这些元素可以在每页多次使用，只要每次使用都反映了正确的语义含义。
![image](https://user-images.githubusercontent.com/102017621/159482190-16fec22a-5ecb-42b9-a638-bb5f26a1a331.png)

