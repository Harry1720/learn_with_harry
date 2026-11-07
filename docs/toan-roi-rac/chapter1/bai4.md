---
title: "Bài 4: VỊ TỪ VÀ LƯỢNG TỪ"
---

## 1. Vị từ & Lượng từ

### 1.1. Vị từ (predicate)

- Là một phát biểu mà:

  - Bản thân nó **không phải là mệnh đề**.

  - Nhưng nếu **<u>hạn chế hoặc gán giá trị</u> (định lượng) cho các biến** của nó thì ta thu được một mệnh đề.

  - Còn có thể gọi là mệnh đề chứa biến/ hàm mệnh đề.

  - ***Ví dụ:*** 
  
    - $p(x):x^{2} - 5x + 6 = 0$

    - $r(x,y,z):x^{2} + y^{2} > z$

    - $p(n):n + 1$ là số nguyên tố

- **Các phép toán trên vị từ:** Tương ứng với các phép toán trên mệnh đề.

  ***Ví dụ:***

  - $\neg(x^2 > 1)$

  - $(x^2 + 3 > 1) \wedge (2x - 1 < 0)$

  - $x$ là người miền Nam hay $x$ là người miền Bắc

  - Nếu $x > 1$ thì $x > 5$

- **Các trường hợp của vị từ:** Với A là một tập hợp. Khi xét một vị từ $p(x)$ với $x \in A$. Ta có các trường hợp sau:

  - **TH 1.** Khi thay $x$ bởi một phần tử $a$ tùy ý thuộc $A$, ta có $p(a)$ đúng.

  - **TH 2.** Với một số giá trị $a$ thuộc $A$, ta có $p(a)$ đúng.

  - **TH 3.** Khi thay $x$ bởi một phần tử $a$ tùy ý thuộc $A$, ta có $p(a)$ sai.

### 1.2. Lượng từ hóa vị từ

> **Định nghĩa 1.** Cho $p(x)$ là một vị từ theo một biến xác định trên $A$. Ta định nghĩa các mệnh đề lượng từ hóa của $p(x)$ như sau:
> - Mệnh đề "**Với mọi $x$ thuộc $A$ sao cho $p(x)$**", kí hiệu bởi
> $$"\forall x \in A, p(x)",$$
> là mệnh đề đúng khi và chỉ khi $p(a)$ luôn đúng với mọi giá trị $a \in A$.
> - Mệnh đề "**Tồn tại một $x$ thuộc $A$ sao cho $p(x)$**" kí hiệu bởi:
> $$"\exists x \in A, p(x)",$$
> là mệnh đề đúng khi và chỉ khi có ít nhất một giá trị $x = a_0$ nào đó sao cho mệnh đề $p(a_0)$ đúng.

  - Từ "tồn tại" có thể được thay thế bởi "có" hay "có ít nhất".
  - ***Lượng từ kết hợp với vị từ** tạo thành **mệnh đề logic.** Do đó nó có chân trị xác định.

  **Ví dụ:**

  - ***P(x): x<sup>2</sup> \> 4***

    - Là 1 vị từ.

    - Khi gán giá trị *x = 3*, ta có *P(3): 3<sup>2</sup> \> 4*, là mệnh đề đúng.

    - Khi áp dụng lượng từ, $\exists x\mathbb{\in R},x^{2} > 4$, ta có một mệnh đề đúng vì tồn tại *x = 3*.

  - ***P(x): x \> 0***

    - Là 1 vị từ.

    - Khi gán giá trị *x = -1*, ta có *P(-1): -1 \> 0,* là mệnh đề sai.

    - Khi áp dụng lượng từ, $\forall x\mathbb{\in N}*,x > 0$, ta có một mệnh đề đúng vì mọi số tự nhiên khác 0 đều lớn hơn 0.

  - Thứ tự lượng từ hóa quan trọng vì nó ảnh hưởng đến ý nghĩa của mệnh đề, cũng như thay đổi cách đọc và bản chất của bài toán.

> **Định nghĩa 2.** Cho $p(x, y)$ là một vị từ theo hai biến $x, y$ xác định trên $A \times B$. Ta định nghĩa các mệnh đề lượng từ hóa của $p(x, y)$ như sau:
> - (i) $"\forall x \in A, \forall y \in B, p(x, y)" := "\forall x \in A, (\forall y \in B, p(x, y))"$
> - (ii) $"\forall x \in A, \exists y \in B, p(x, y)" := "\forall x \in A, (\exists y \in B, p(x, y))"$
> - (iii) $"\exists x \in A, \forall y \in B, p(x, y)" := "\exists x \in A, (\forall y \in B, p(x, y))"$
> - (iv) $"\exists x \in A, \exists y \in B, p(x, y)" := "\exists x \in A, (\exists y \in B, p(x, y))"$

  - **Ví dụ a.** Mệnh đề $"\forall x \in \mathbb{R}, \forall y \in \mathbb{R}, x + 2y < 1"$ đúng hay sai?
  
    $\rightarrow$ Mệnh đề sai vì tồn tại $x_0 = 0, y_0 = 1 \in \mathbb{R}$ mà $x_0 + 2y_0 = 2$.

  - **Ví dụ b.** Mệnh đề $"\forall x \in \mathbb{R}, \exists y \in \mathbb{R}, x + 2y < 1"$ đúng hay sai?

    $\rightarrow$ Mệnh đề đúng vì với mỗi $x = a \in \mathbb{R}$, tồn tại $y_a \in \mathbb{R}$ như $y_a = -a/2$, sao cho $a + 2y_a < 1$.

> **Định lý.** Cho $p(x, y)$ là một vị từ theo hai biến $x, y$ xác định trên $A \times B$. Khi đó:
> - i) $"\forall x \in A, \forall y \in B, p(x, y)" \Leftrightarrow "\forall y \in B, \forall x \in A, p(x, y)"$
> - ii) $"\exists x \in A, \exists y \in B, p(x, y)" \Leftrightarrow "\exists y \in B, \exists x \in A, p(x, y)"$
> - iii) $"\exists x \in A, \forall y \in B, p(x, y)" \Rightarrow "\forall y \in B, \exists x \in A, p(x, y)"$
>
>
> Chiều đảo của iii) nói chung không đúng.

  - ***Chứng minh chiều đảo không đúng trong trường hợp tổng quát.*** Lấy ví dụ sau:

    - Gọi p(x, y) là vị từ theo 2 biến thực: **"x + y = 1"**

    - Ta nhận xét rằng nếu thay **y = b** là một số thực tùy ý thì ta có thể chọn **x = 1 - b** để cho **x + b = 1**, nên mệnh đề "$\exists x\mathbb{\in R},x + b = 1$" là đúng.

      Điều này chứng tỏ mệnh đề "$\forall y\mathbb{\in R},\exists x\mathbb{\in R},x + y = 1$" đúng.

    - Ngược lại nếu thay **z = a** tùy ý, ta có thể chọn **<span class="mark">y = -a</span>** để cho **a + y = 0 ≠ 1** nên mệnh đề "$\forall y\mathbb{\in R},a + y = 1$" là sai.

      Điều này chứng tỏ mệnh đề "$\exists x\mathbb{\in R},\forall y\mathbb{\in R},x + y = 1$" là sai.

    - **Do đó ta được đpcm.**


### 1.3. Quy tắc biến đổi lượng từ

- ** Phủ định của mệnh đề lượng từ hóa vị từ *p(x, y,…)* có được bằng các thay ∀ thành ∃, thay ∃ thành ∀ và vị từ p(x, y, .. ) thành ¬p(x, y, .. ).

  * $\overline{\forall x, p(x)} \Leftrightarrow \exists x, \overline{p(x)}$

  * $\overline{\exists x, p(x)} \Leftrightarrow \forall x, \overline{p(x)}$

- Không phải tất cả x đều thỏa p(x), nghĩa là tồn tại ít nhất một x không thỏa p(x).

- Không có x nào thỏa p(x), nghĩa là tất cả x đều không thỏa p(x).

  ***Ví dụ:*** $\overline{\forall x, x^2 - 3x + 2 = 0} \Leftrightarrow \exists x, x^2 - 3x + 2 \neq 0$

### 1.4. Các quy tắc phổ dụng:

**1.3.5. Các quy tắc phổ dụng**

- **Đặc biệt hóa phổ dụng**
  $$
  \begin{array}{l}
  \forall x \in A, p(x) \\
  a \in A \\
  \hline \therefore p(a)
  \end{array}
  $$

  **Ví dụ.** "Mọi người đều chết"
  "Socrate là người"
  Vậy "Socrate cũng chết"


- **Tổng quát hóa phổ dụng:** Nếu với mỗi $a \in X$ ta có $p(a)$ là mệnh đề đúng thì khẳng định "$\forall x \in X, p(x)$" là mệnh đề đúng.

  **Ví dụ.** Mỗi số thực đều có bình phương không âm nên mọi số thực đều có bình phương không âm.
