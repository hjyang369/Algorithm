function solution(maps) {
    const N = maps.length; //y
    const M = maps[0].length; //x
    const goalY = N - 1;
    const goalX = M - 1;
    const dy = [0, 0, 1, -1];
    const dx = [-1, 1, 0, 0];
    
    const queue = [];
    queue.push([0, 0, 1]);
    
    while(queue.length) {
        const [curY, curX, move] = queue.shift();
        if(curY === goalY && curX === goalX) return move;
        
        for(let i = 0; i < 4; i++) {
            const ny = curY + dy[i];
            const nx = curX + dx[i];
            if(ny >= 0 && ny < N && nx >= 0 && nx < M && maps[ny][nx] === 1) {
                queue.push([ny, nx, move + 1]);
                maps[ny][nx] = 0;
            }
        }
    }
    
    return -1;
}

    