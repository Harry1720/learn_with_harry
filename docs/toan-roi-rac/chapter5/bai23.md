---
title: "Bài 23: DẠNG TUYỂN CHUẨN TẮC"
sidebar_position: 2
---

<div className="pdf-document-actions">
  <a className="button button--primary" href="/pdfs/toan-roi-rac/chapter2/bai7.pdf" download="bai7-toan-roi-rac.pdf" target="_blank" rel="noreferrer">
    Tải file PDF
  </a>
</div>

> Một số tài liệu khác gọi là **Dạng nối rời chính tắc.**

## 23.1. Từ đơn, từ tối tiểu

- Xét tập hợp các hàm Boole $F$<sub>$n$</sub> theo **$n$ biến** boolean $x$<sub>1</sub>, $x$<sub>2</sub>,..., $x$<sub>$n$</sub>. Khi đó:

  - $i$\) Mỗi biến Boole $x$<sub>$i$</sub> hay ${\overline{x}}_{i}$ được gọi là **<u>từ đơn.</u>**

  - ii\) **<u>Từ tối tiểu</u>** *(Hội sơ cấp/ Đơn thức tối tiểu)* là **tích** **khác 0** của <span class="mark">đúng **$n$ từ đơn.**</span>

  **Ví dụ.** Xét tập hợp các hàm Boole theo 3 biến $x, y, z$. Ta có

  * Các từ đơn là $x, y, z, \overline{x}, \overline{y}, \overline{z}$.
  * Các từ tối tiểu là $x y z, \overline{x} y z, x \overline{y} z, x y \overline{z}, \overline{x} \overline{y} z, \overline{x} y \overline{z}, x \overline{y} \overline{z}, \overline{x} \overline{y} \overline{z}$.

- **Nhận xét.** Tập hợp các hàm Boole **$n$ biến** chứa đúng **2n từ đơn và 2<sup>$n$</sup> từ tối tiểu.**

- **Định lý.** *Cho $f$ là hàm Boole $n$ biến $x_1, x_2, \dots x_n$. Khi đó:*

  - i) *Nếu $f$ là từ tối tiểu thì bảng chân trị của $f$ có đúng một vị trí bằng $1$.*

  - ii) *Ngược lại, nếu $f$ chỉ nhận giá trị $1$ tại vị trí $u = (a_1, a_2, \dots, a_n)$ thì $f$ là từ tối tiểu có dạng $f = b_1 b_2 \dots b_n$, trong đó*

    $$
    b_i = \begin{cases}
    x_i & \textit{nếu } a_i = 1; \\
    \overline{x}_i & \textit{nếu } a_i = 0.
    \end{cases}
    $$

  **Ví dụ.**

  1. Nếu $f(x, y, z)$ chỉ nhận giá trị $1$ tại vị trí $(1, 0, 1)$ thì $f = x \overline{y} z$.
  2. Nếu $f(x, y, z, t)$ chỉ nhận giá trị $1$ tại vị trí $(0, 1, 1, 0)$ thì
    $$f = \overline{x} y z \overline{t}.$$
  3. Nếu $f(x, y, z, t) = x y \overline{z} \overline{t}$ thì $f$ chỉ nhận giá trị $1$ tại vị trí $(1, 1, 0, 0)$.

## 23.2. Dạng tuyển chuẩn tắc

- **Định nghĩa.** Xét tập hợp các hàm Boole của $n$ biến $\mathbb{F}_n$ theo $n$ biến $x_1, x_2, \dots, x_n$. Khi đó:

  - i) ***Đơn thức*** là tích khác không của một số hữu hạn từ đơn.

  - ii) ***Công thức đa thức*** là công thức biểu diễn hàm Boole thành tổng của các đơn thức.


  **Ví dụ 1.** Xét tập hợp các hàm Boole theo 3 biến $x, y, z$. Ta có

    * Các hàm Boole $y, x z, y z, x \overline{y} z, \overline{y} \overline{z}, \overline{z}$ là các đơn thức.
    * Công thức $f = x y \lor \overline{y} z \lor x \overline{y} \overline{z}$ là một công thức đa thức.

  **Ví dụ 2.** Xét hàm Boole $f(x, y, z) = x(y \lor \overline{z}) \lor \overline{x} z \quad (1)$. Ta có (1) không là công thức đa thức của $f$. Tuy nhiên,

    $$(1) \Leftrightarrow f = x y \lor x \overline{z} \lor \overline{x} z, \qquad (2)$$

    Khi đó (2) là công thức đa thức của $f$.

- ***Nhận xét.*** Mọi hàm Boole đều có thể biểu diễn dưới dạng đa thức.

- Dạng nối rời chính tắc là công thức biểu diễn **hàm Boole** thành **<u>tổng (hội) của các từ tối tiểu.</u>**

  Hay nói cách khác:

  Nếu $\boxed{f(x_1, x_2, \dots, x_n) = \bigvee (y_1 y_2 \dots y_n) \text{ (*)}}$ ta nói $f(x_1, x_2, \dots, x_n)$ được biểu diễn dưới dạng tuyển chuẩn tắc của các hội sơ cấp.

  *Trong đó:*
  $y_1 y_2 \dots y_n$ được gọi là 1 hội sơ cấp của các biến $x_1, x_2, \dots, x_n$ nếu $y_i = x_i$ hoặc $y_i = \overline{x_i}$

  Và hàm bool **chỉ nhận** các từ tối tiểu (**các dòng**) có giá trị **$f$** **bằng 1** trong bảng chân trị.

- **Có 2 cách để xác định dạng nối rời chính tắc một hàm Bool:**

  **Ví dụ 1: *Dùng bảng chân trị***

  Xét hàm boolean $f(x, y, z) = xy \lor x\overline{y}z \lor x(yz \lor \overline{z})$ Ta có $f(x, y, z) = xy \lor x\overline{y}z \lor xyz \lor x\overline{z}$. Và có bảng biểu diễn $f$ như sau:

  | $x$ | $y$ | $z$ | $xy$ | $x\overline{y}z$ | $xyz$ | $x\overline{z}$ | $f(x, y, z)$ |
  | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
  | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 |
  | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
  | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
  | 1 | 0 | 0 | 0 | 0 | 0 | 1 | **1** |
  | 1 | 0 | 1 | 0 | 1 | 0 | 0 | **1** |
  | 1 | 1 | 0 | 1 | 0 | 0 | 1 | **1** |
  | 1 | 1 | 1 | 1 | 0 | 1 | 0 | **1** |

  Từ những dòng $f(x, y, z)$ có giá trị bằng **1** ta được:

  $$f(x, y, z) = x\overline{y}\overline{z} \lor x\overline{y}z \lor xy\overline{z} \lor xyz$$

  Tức là $f(x, y, z)$ đã được biểu diễn dưới dạng tuyển chuẩn tắc.


- *Hoặc ta có thể dùng cách **bổ sung** các từ đơn còn thiếu vào hàm bool như sau:*
  - **Bước 1:** Khai triển hàm Bool thành tổng của các đơn thức.
  - **Bước 2:** Với mỗi đơn thức thu được ở bước 1, ta nhân đơn thức đó với các tổng của những từ đơn bị thiếu và phần bù của nó trong đơn thức đó.**
  - **Bước 3:**: Tiếp tục khai triển hàm thu được ở bước 2 và loại bỏ những đơn thức bị trùng. Công thức đa thức thu được chính là dạng nối rời chính tắc của hàm Bool ban đầu.**

  **Ví dụ.** Xét hàm Boole

  $$f(x, y, z) = x(y \lor \overline{z}) \lor \overline{x}z. \quad (1)$$

  * Ta có (1) không là công thức đa thức của $f$.
  * Ta có
    $$(1) \Leftrightarrow f = x y \lor x \overline{z} \lor \overline{x} z. \quad (2)$$
    Khi đó (2) là công thức đa thức của $f$ nhưng không phải là dạng nối rời chính tắc của $f$.
  * Ta có
    $$
    \begin{aligned}
    (2) &\Leftrightarrow f = x y(z \lor \overline{z}) \lor x \overline{z}(y \lor \overline{y}) \lor \overline{x} z(y \lor \overline{y}) \\
        &\Leftrightarrow f = x y z \lor x y \overline{z} \lor x y \overline{z} \lor x \overline{y} \overline{z} \lor \overline{x} y z \lor \overline{x} \overline{y} z \\
        &\Leftrightarrow f = x y z \lor x y \overline{z} \lor x \overline{y} \overline{z} \lor \overline{x} y z \lor \overline{x} \overline{y} z. \qquad (3).
    \end{aligned}
    $$
    
  Công thức (3) là dạng nối rời chính tắc của $f$.

  ***So sánh với Bảng chân trị của hàm (2):***

    | **$x$** | **$y$** | **$z$** | **xy** | $x\overline{z}$ | $\overline{x}z$ | **$f$($x$, $y$, $z$)** |
    |:-----:|:-----:|:-----:|:------:|:-------------:|:-------------:|:--------------:|
    |   0   |   0   |   0   |   0    |       0       |       0       |       0        |
    |   0   |   0   |   1   |   0    |       0       |       1       |     **1**      |
    |   0   |   1   |   0   |   0    |       0       |       0       |       0        |
    |   0   |   1   |   1   |   0    |       0       |       1       |     **1**      |
    |   1   |   0   |   0   |   0    |       1       |       0       |     **1**      |
    |   1   |   0   |   1   |   0    |       0       |       0       |       0        |
    |   1   |   1   |   0   |   1    |       1       |       0       |     **1**      |
    |   1   |   1   |   1   |   1    |       0       |       0       |     **1**      |

  **Ví dụ 3:** Xét hàm boole, với 3 biến: $x, y, z$  
  - $x, y, z, \overline{x}, \overline{y}, \overline{z}$ là các từ đơn  
  - $xy, yz$ là đơn thức $\qquad$ $xy\overline{z}$ là từ tối tiểu  
  - $E = xy \lor yz$ là một công thức đa thức  
  - $F = xyz \lor \overline{x}\overline{y}\overline{z}$ là một dạng nối rời chính tắc

- **Lưu ý.** $\quad \mathbb{B}^n = \{u = (x_1, x_2, \dots, x_n) \mid x_i \in \mathbb{B}\}$

- **Định nghĩa.** Xét hàm Boole $f$ theo $n$ biến $x_1, x_2, \dots, x_n$. Đặt

  * $f^{-1}(1) = \{u \in \mathbb{B}^n \mid f(u) = 1\}$,
  * $f^{-1}(0) = \{u \in \mathbb{B}^n \mid f(u) = 0\}$.

  **Ví dụ 1.** Nếu $f$ là hàm Boole theo 3 biến $x, y, z$ sao cho $$f^{-1}(1) = \{101, 001, 100, 010\}$$

    thì dạng nối rời chính tắc của $f$ là: $$f = x \overline{y} z \lor \overline{x} \overline{y} z \lor x \overline{y} \overline{z} \lor \overline{x} y \overline{z}.$$

  **Ví dụ 2.** Cho hàm Boole 3 biến $x, y, z$, $$f^{-1}(0) = \{100, 010, 110, 011, 101\}.$$ Tìm dạng nối rời chính tắc của $f$

    **Giải.** Bằng cách lập bảng chân trị cho $f$ ta được $$f^{-1}(1) = \{000, 001, 111\},$$

    nên dạng nối rời chính tắc của f là: $$f = \overline{x} \overline{y} \overline{z} \lor \overline{x} \overline{y} z \lor x y z.$$

> ***Bài toán:***
>  - Cho hàm boolean $f$ bất kỳ, yêu cầu tìm dạng **tuyển chuẩn tắc tối thiểu** *(công thức đa thức tối tiểu)* của nó.
>  - Ý nghĩa của bài toán: **$f$ tối thiểu $⇒$ <u>Mạch logic tối thiểu</u>**
>
>  🡪 Để tìm, ta sử dụng ***phương pháp Karnaugh*** sau đây.
