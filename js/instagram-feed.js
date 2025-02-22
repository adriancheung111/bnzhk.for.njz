const instagramFeed = {
    init: async function() {
        const accessToken = 'YOUR_GRAPH_API_TOKEN';
        const hashtagId = 'YOUR_HASHTAG_ID'; // 需要先通過 API 獲取 hashtag ID
        
        try {
            // 獲取 hashtag 下的媒體內容
            const response = await fetch(
                `https://graph.facebook.com/v18.0/${hashtagId}/top_media` + 
                `?fields=id,caption,media_type,media_url,permalink,thumbnail_url,children{media_url,media_type}` +
                `&access_token=${accessToken}`
            );
            const data = await response.json();
            this.displayFeed(data.data);
        } catch (error) {
            console.error('Error fetching Instagram feed:', error);
        }
    },

    displayFeed: function(posts) {
        const container = document.getElementById('instagram-feed');
        container.innerHTML = ''; // 清空現有內容
        
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'instagram-post';
            
            switch(post.media_type) {
                case 'VIDEO':
                case 'REEL':
                    postElement.innerHTML = `
                        <div class="post-container">
                            <video src="${post.media_url}" controls poster="${post.thumbnail_url}"></video>
                            <div class="post-overlay">
                                <span class="post-type"><i class="fa fa-play-circle"></i></span>
                            </div>
                        </div>
                        <div class="post-caption">${post.caption || ''}</div>
                    `;
                    break;
                    
                case 'CAROUSEL_ALBUM':
                    if (post.children && post.children.data) {
                        const firstItem = post.children.data[0];
                        postElement.innerHTML = `
                            <div class="post-container">
                                ${firstItem.media_type === 'VIDEO' 
                                    ? `<video src="${firstItem.media_url}" controls></video>`
                                    : `<img src="${firstItem.media_url}" alt="">`
                                }
                                <div class="post-overlay">
                                    <span class="post-type"><i class="fa fa-clone"></i></span>
                                </div>
                            </div>
                            <div class="post-caption">${post.caption || ''}</div>
                        `;
                    }
                    break;
                    
                default: // IMAGE
                    postElement.innerHTML = `
                        <div class="post-container">
                            <img src="${post.media_url}" alt="">
                        </div>
                        <div class="post-caption">${post.caption || ''}</div>
                    `;
            }
            
            // 添加點擊事件跳轉到 Instagram
            postElement.addEventListener('click', () => {
                window.open(post.permalink, '_blank');
            });
            
            container.appendChild(postElement);
        });
    }
}; 