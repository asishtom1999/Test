import {
    bootstrapcamerakit,
    createMediaStreamSource,
    Transform2D,
} from '@snap/camera-kit'

(async function(){
    var camerakit = await bootstrapcamerakit( {apiToken: '<eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNjk3MTE4ODg5LCJzdWIiOiIwOTQ1YWRkMi04NGVmLTQxMTQtYjFjMC0wOTZjZmM3MDE2MmN-U1RBR0lOR34yNzQyMDYxMS0zOWIwLTRkMzctOTIxNi00NWFjYTYyZGE3ODgifQ.zUriTwZn5hQ7mN_JZFhJBq4cHrRD8AzQO4Fh3I_0oPU>' })

    const session = await camerakit.createsession()
    document.getElementById( 'camvas').replaceWith(session.output.live)

    const{ lenses } = await camerakit.lensRepository.loadLensGroups( {'c7068349-fdcf-4746-962c-8e8b5e86982b>'})

    session.applyLens(lenses[0])

    let createMediaStream = await navigator.mediaDevices.getUserMedia( {video:
    { facingMode: 'environment' }
    });

    const source = createMediaStreamSource(MediaStream, {
       
        cameraType: 'back'
    })
    await session.setSource(source)
    session.source.setRenderSize(window.innerWidth, window.innerHeight)

    session.play()
})();

    