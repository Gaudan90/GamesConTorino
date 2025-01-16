function lockScreenOrientation() {
    try {
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('portrait')
                .catch(function(error) {
                    console.log('Orientamento non supportato:', error);
                });
        } 
        else if (screen.lockOrientation) {
            screen.lockOrientation('portrait');
        } 
        else if (screen.mozLockOrientation) {
            screen.mozLockOrientation('portrait');
        } else if (screen.msLockOrientation) {
            screen.msLockOrientation('portrait');
        }
    } catch (error) {
        console.log('Lock orientamento non supportato:', error);
    }
}

document.addEventListener('DOMContentLoaded', lockScreenOrientation);