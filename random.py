for i in range(0,65):
    if i&8==0:
        if i%2==1:
            print(f'<div class="s{i+1} black cell"></div>')
        else:
            print(f'<div class="s{i+1} white cell"></div>')
    else:
        if i%2==1:
            print(f'<div class="s{i+1} white cell"></div>')
        else:
            print(f'<div class="s{i+1} black cell"></div>')
