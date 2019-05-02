/*  stat 파일 정보 읽기 
    기본적으로 해당 파일의 존재 여부 확인용으로 사용.
*/
const fs = require('fs');

fs.stat('newname.txt', (err, stats) => {
    if( err ) {
        console.log( err );
        return;
    }
    console.log( stats );
});


/**
    파일이 없을 경우 err 데이터를 통해 확인 가능.
{ [Error: ENOENT: no such file or directory, stat 'tempnewname.txt']
  errno: -2,
  code: 'ENOENT',
  syscall: 'stat',
  path: 'tempnewname.txt' }
 */

/**
    파일이 있을 경우 다음과 같은 데이터 확인 가능.
    Stats {
        dev: 16777220,
        mode: 33188,
        nlink: 1,
        uid: 501,
        gid: 20,
        rdev: 0,
        blksize: 4194304,
        ino: 4704862,
        size: 4,
        blocks: 8,
        atimeMs: 1546576717691.7078,
        mtimeMs: 1546575257364.0925,
        ctimeMs: 1546576681976.4182,
        birthtimeMs: 1546575257363.1765,
        atime: 2019-01-04T04:38:37.692Z,
        mtime: 2019-01-04T04:14:17.364Z,
        ctime: 2019-01-04T04:38:01.976Z,
        birthtime: 2019-01-04T04:14:17.363Z
    }

    JSON 객체로 정보를 가져온다.
    size  : 파일의 크기
    atime : access time 접근 시간, 가장 최근에 파일을 읽은 시간정보.
    mtime : modify time 수정 시간,
    ctime : change time 변경 시간, 파일 권한을 수정한 시간.
    birthtime : 파일의 생성 시간.
 */