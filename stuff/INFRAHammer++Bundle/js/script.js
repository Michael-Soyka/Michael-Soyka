function imagePreview()
{
    console.log( 'fsafas' );
}

window.onload = function() {
    console.log( 'Welcome!' );

    const bodyEl = document.querySelector( 'body' ); 

    const showcaseImages = document.querySelectorAll( '.page-block#showcase .image');

    for( const image of showcaseImages )
    {
        image.addEventListener( 'click', ( event ) =>
            {
                const element = event.currentTarget;

                const imageSrc = element.querySelector( 'img' ).getAttribute( 'src' );

                const previewerEl = document.createElement( 'div' );
                previewerEl.className = 'image-preveiwer';
                previewerEl.addEventListener( 'click', ( event ) =>
                    {
                        event.currentTarget.remove();
                    }
                )

                const previewerImageEl = document.createElement( 'img' );
                previewerImageEl.src = imageSrc;

                previewerEl.append( previewerImageEl );
                
                const previewerNoteEl = document.createElement( 'span' );
                previewerNoteEl.innerHTML = 'click to close'
                
                previewerEl.append( previewerNoteEl );
                
                bodyEl.append( previewerEl );
            }
        )
    }
};