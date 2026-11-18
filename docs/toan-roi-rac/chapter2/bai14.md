---
title: "Bài 14: TỔ HỢP LẶP VÀ BÀI TOÁN ĐẾM NGHIỆM NGUYÊN"
sidebar_position: 8
---

<div className="pdf-document-actions">
  <a className="button button--primary" href="/pdfs/toan-roi-rac/chapter2/bai14.pdf" download="bai14-toan-roi-rac.pdf" target="_blank" rel="noreferrer">
    Tải file PDF
  </a>
</div>

**Mở đầu:** *"Có **$k$ chiếc kẹo** giống nhau, cần chia chúng cho **$n$ em bé**. Hỏi có bao nhiêu cách chia kẹo như vậy?".*

*Bài toán có thể được đưa về theo 2 hướng chính như sau:*

## 14.1. Bài toán đếm số nghiệm nguyên không âm
- Mỗi cách chọn ra **<u>$k$ vật từ $n$ loại vật</u>** khác nhau **(trong đó mỗi loại vật có thể được chọn lại nhiều lần)** được gọi là *<u>tổ hợp lặp chập $k$ của $n$</u>.*

- Số các tổ hợp lặp chập $k$ của $n$ là 

$$
\boxed{K_{n}^{k} = C_{n + k - 1}^{k} = C_{n + k - 1}^{n - 1}}
$$

  *(do ta có công thức: $C_{n}^{n - k} = C_{n}^{k},\quad 0 \leq k \leq n$)*

  **Chứng minh:**

  - Sử dụng kĩ thuật song ánh, coi rằng giữa mỗi em bé có một **số 0 (ngăn cách)** và **số kẹo của em bé thứ *$i$*** nhận được sẽ biểu diễn bằng một dãy gồm ***$x$<sub>i</sub>*​ số 1,** thì bài toán trở thành đếm số cấu hình có dạng:

  $$
  \underbrace{11 \ldots 1}_{x_1} 0 \underbrace{11 \ldots 1}_{x_2} 0 \ldots 0 \underbrace{11 \ldots 1}_{x_n}
  $$

  - *Với $k$ số 1 và $n$−1 số 0 (đến cuối cùng số kẹo đã chia phải đúng bằng $k$, tức số kẹo ban đầu;\ $n$-1 số 0 tượng trưng cho $n$-1 vách ngăn giữa các em).*

  - Như vậy, thực tế ta đang **đếm số cách đặt $n$−1 số 0 vào một dãy gồm *$k$*+*$n$*−1 vị trí** *(bao gồm $k$ vị trí cho số 1 và $n$ – 1 vị trí cho số 0)*, còn lại sẽ là các số 1. Theo quy tắc tổ hợp không lặp, số nghiệm của bài toán sẽ là: $C_{n + k - 1}^{n - 1} = C_{n + k - 1}^{k}$.

  - ***Lấy ví dụ:*** Có 5 chiếc kẹo chia cho 3 em. Có bao nhiêu cách chia như vậy?

    - Ta có: $n$ = 3, $k$ = 5. *<u>Vậy ta có $n$-1=2 vách ngăn tương ứng 2 chữ số 0 và 5 chữ số 1.</u>*

    - Giả sử 3 em đặt tên lần lượt là $A$, $B$, $C$

    - Ta có sơ đồ của một vài trường hợp như sau: (thay 1 = $X$, 0 = \|)

      - $\underbrace{\phantom{X}}_{A}|\underbrace{\phantom{X}}_{B}|\underbrace{XXXXX}_{C}$ ($A$, $B$ không có kẹo, $C$ có cả thảy 5) \(0011111\)

      - $\underbrace{XX}_{A}|\underbrace{X}_{B}|\underbrace{XX}_{C}$ ($A$ có 2, $B$ có 1, $C$ có 2).

      - …

    - Vậy số cách chia thỏa ycbt: $C_{n + k - 1}^{k} = C_{3 + 5 - 1}^{5} = 21.$

**Ví dụ:** Có 3 loại nón $A$, $B$, $C$. An mua 2 cái nón. Hỏi An có bao nhiêu cách chọn?

**<u>Giải:</u>** Ta có mỗi cách chọn là mỗi tổ hợp lặp chập 2 của 3. Số cách chọn:

$$
K_{3}^{2} = C_{3 + 2 - 1}^{2} = C_{4}^{2} = 6
$$ 

**(Cụ thể AA, AB, AC, BB, BC, CC)**

> **Hệ quả.** Số nghiệm nguyên không âm $(x_1, x_2, \ldots, x_n) \ (x_i \in \mathbb{Z}, x_i \ge 0)$ của phương trình $$x_1 + x_2 + \ldots + x_n = k$$ là $K_n^k = C_{n+k-1}^k$.

**Ví dụ 1.** Tìm số nghiệm nguyên không âm của phương trình $$x_1 + x_2 + x_3 = 10.$$

**Giải.** Số nghiệm nguyên không âm của phương trình là: $K_3^{10} = C_{12}^{10}$.

**Ví dụ 2.** Tìm số nghiệm nguyên của phương trình
$$x_1 + x_2 + x_3 + x_4 = 20 \quad (*)$$
thỏa điều kiện $x_1 \ge 4; x_2 > 2; x_3 > 5; x_4 \ge -2$

**Giải.** 
- Ta viết điều kiện đã cho thành $$x_1 \ge 4; x_2 \ge 3; x_3 \ge 6; x_4 \ge -2.$$
- Đặt $$y_1 = x_1 - 4; y_2 = x_2 - 3; y_3 = x_3 - 6; y_4 = x_4 + 2.$$
- Khi đó $y_i \ge 0 \quad (1 \le i \le 4)$. Phương trình $(*)$ trở thành $$y_1 + y_2 + y_3 + y_4 = 9 \quad (**)$$
- Ta có số nghiệm của phương trình $(*)$ bằng số nghiệm của phương trình $(**)$. Do đó số nghiệm của phương trình $(*)$ là $K_4^9 = C_{12}^9$.

**Ví dụ 3.** Tìm số nghiệm nguyên không âm của phương trình $$x_1 + x_2 + x_3 + x_4 = 20$$ thỏa điều kiện $x_1 \le 3; x_2 \ge 2; x_3 > 4. \quad (*)$

**Giải.** 
- Ta viết điều kiện đã cho thành $$0 \le x_1 \le 3; x_2 \ge 2; x_3 \ge 5; x_4 \ge 0.$$
- Xét các điều kiện sau:
  - $x_1 \ge 0; x_2 \ge 2; x_3 \ge 5; x_4 \ge 0 \quad (**)$
  - $x_1 > 3; x_2 \ge 2; x_3 \ge 5; x_4 \ge 0 \quad (***)$

- Gọi $p, q, r$ lần lượt là các số nghiệm nguyên không âm của phương trình thỏa các điều kiện $(*), (**), (***)$. Khi đó $\mathbf{p = q - r}$.

**Ví dụ 4.** Tìm số nghiệm nguyên không âm của phương trình $x$<sub>1</sub>+ $x$<sub>2</sub> + $x$<sub>3</sub> + $x$<sub>4</sub> = 20 **(1)** thỏa điều kiện **$x_{1} ≤$ 3; $x_{2} ≥$ 2; $x$<sub>3</sub> \> 4** (∗).

- Ta viết điều kiện đã cho thành $x_{1} ≤$ 3; $x_{2} ≥$ 2; **$x_{3} ≥$ 5**.
- Xét các điều kiện sau:
- $x_{2} ≥$ 2; $x_{3} ≥$ 5 (∗∗)
- $x_{1} ≥$ 4; $x_{2} ≥$ 2; $x_{3} ≥$ 5 (∗∗∗)
- Gọi $p$, $q$, $r$ lần lượt là các **số nghiệm** nguyên không âm của phương trình (1) thỏa các điều kiện (\*), (\*\*), (\*\*\*). Ta có: $p$ = $q$ – $r$

- Số nghiệm $p$ của phương trình thỏa các điều kiện $x_1 \le 3; x_2 \ge 2; x_3 > 4$ được tính như sau:

1. $q$: Tính tất cả nghiệm của phương trình thỏa điều kiện $x_2 \ge 2; x_3 > 4$:
   - Ở đây không ràng buộc $x_1 \le 3$.
   - Sử dụng cách chuyển đổi:
     - $x_2' = x_2 - 2 \ge 0$,
     - $x_3' = x_3 - 5 \ge 0$,
     - Phương trình trở thành $x_1' + x_2' + x_3' + x_4' = 13$, với tất cả $x_1', x_2', x_3', x_4'$ không âm.
   - Số nghiệm của phương trình này là $q = K_{13}^4 = \binom{16}{3}$.

2. $r$: Tính số nghiệm vi phạm ràng buộc $x_1 \le 3$:
   - Khi $x_1 > 3$, đặt $x_1' = x_1 - 4 \ge 0$.
   - Phương trình trở thành $x_1' + x_2' + x_3' + x_4' = 9$.
   - Số nghiệm của phương trình này là $r = K_9^4 = \binom{12}{3}$.

3. Hiệu $p = q - r$:
   - $p$ là số nghiệm thỏa điều kiện ban đầu ($x_1 \le 3; x_2 \ge 2; x_3 > 4$).
   - Ta tính $q$ là tất cả nghiệm của phương trình, sau đó loại bỏ các nghiệm không thỏa $x_1 \le 3$ bằng cách trừ $r$.

- *Trước hết ta tìm $q$.*

  - Đặt: $x$<sub>1</sub>’ = $x$<sub>1</sub>; **$x$<sub>2</sub>’ = $x$<sub>2</sub> – 2; $x$<sub>3</sub>’ = $x$<sub>3</sub> - 5;** $x$<sub>4</sub>’ = $x$<sub>4</sub>
  - Phương trình (1) trở thành: **<span class="mark">$x$<sub>1</sub>’+ $x$<sub>2</sub>’ + $x$<sub>3</sub>’ + $x$<sub>4</sub>’ = 13</span>** **(2)**
  - Số nghiệm nguyên không âm của phương trình (1) thỏa điều kiện (\*\*) bằng số nghiệm nguyên không âm của phương trình (2)
  $$
  \boxed{q = K_{4}^{13} = C_{4 + 13 - 1}^{13} = C_{16}^{13}}
  $$
- Tương tự, ta có: $\boxed{r = K_{4}^{9} = C_{4 + 9 - 1}^{9} = C_{12}^{9}}$
  $$
  \Rightarrow p = q - r = C_{16}^{13} - C_{12}^{9} = 560 - 220 = 340.
  $$
- Vậy số nghiệm nguyên không âm của phương trình (1) thỏa điều kiện (\*) là 340.

## 14.2. Bài toán đếm số nghiệm nguyên dương
- Bài toán có thể lắt léo hơn một chút, nếu như đề bài yêu cầu rằng khi chia kẹo, **mỗi em bé đều phải được nhận ít nhất 1 chiếc kẹo.** Khi đó, bài toán sẽ trở thành: *Đếm số nghiệm **nguyên dương** của phương trình:*

$$
\boxed{x_1 + x_2 + \cdots + x_n = k}
$$

- Ta có:

  - Xếp $k$ cái kẹo thành hàng ngang, ta được ($k$ – 1) khoảng trắng.

  - Cần chia cho $n$ em, thì cần ($n$ – 1) ngăn cách.

  🡪 Số cách chia tương ứng với **số cách chọn vị trí từ ($k$ – 1) vị trí khoảng trắng cho\
  ($n$ – 1) ngăn cách.** Theo quy tắc tổ hợp không lặp, số nghiệm của bài toán sẽ là: $C_{k - 1}^{n - 1}$

- **Các bài toán cũng tương đương:** Mua *$k$* món đồ cùng loại của *$n$* hãng sản xuất; Xếp *$k$* đồ vật vào *$n$* thùng chứa…

> **CHÚ Ý: Trong một số tài liệu, định nghĩa Tổ hợp lặp, Chỉnh hợp lặp có thể được trình bày với $n$ là số phần tử khác nhau (chứ không phải là số loại phần tử).**

- **Tổ hợp lặp** = 1 bộ **<u>không xét thứ tự</u>** gồm $k$ phần tử được chọn từ $n$ phần tử khác nhau (có thể chọn trùng lặp)

- **Chỉnh hợp lặp** = 1 bộ **<u>có thứ tự</u>** gồm $k$ phần tử được chọn từ $n$ phần tử khác nhau (có thể chọn trùng lặp)
