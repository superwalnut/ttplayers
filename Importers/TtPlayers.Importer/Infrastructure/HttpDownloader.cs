using Microsoft.Extensions.Logging;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace TtPlayers.Importer.Infrastructure
{
    public interface IHttpDownloader
    {
        void DownloadFile(string url, string filePath);
        string DownloadJsonByPost(string url, string body, string cookie = null);
        Task<string> DownloadByGet(string url);
        void DownloadImage(string imageUrl, string fileName);
    }

    public class HttpDownloader : IHttpDownloader
    {
        private readonly ILogger<HttpDownloader> _logger;

        public HttpDownloader(ILogger<HttpDownloader> logger)
        {
            _logger = logger;
        }

        public void DownloadFile(string url, string filePath)
        {
            var client = new RestClient();
            var request = new RestRequest(url, Method.Get);

            var response = client.Execute(request);

            if (response.StatusCode == HttpStatusCode.OK)
            {
                // Write the response content to the file
                File.WriteAllBytes(filePath, response.RawBytes);
            }
            else
            {
                // Handle the case where the request was not successful
                _logger.LogError($"Failed to download file. Url:{url}");
            }
        }

        public string DownloadJsonByPost(string url, string jsonBody, string cookie = null)
        {
            string json = "";
            var client = new RestClient();
            var request = new RestRequest(url, Method.Post);
            request.AddBody(jsonBody);
            request.AddHeader("Content-Type", "application/json;charset=UTF-8");
            if (cookie != null)
            {
                request.AddHeader("Cookie", cookie);
            }

            var response = client.Execute(request);

            if (response.IsSuccessful)
            {
                // Write the response content to the file
                json = response.Content;
            }
            else
            {
                // Handle the case where the request was not successful
                _logger.LogError($"Failed to download file. Url:{url} - status code:{response.StatusCode}");
            }

            return json;
        }

        public async Task<string> DownloadByGet(string url)
        {
            string json = "";
            var client = new RestClient();
            var request = new RestRequest(url, Method.Get);
            var response = await client.ExecuteAsync(request);

            if (response.IsSuccessful)
            {
                // Write the response content to the file
                json = response.Content;
            }
            else
            {
                // Handle the case where the request was not successful
                _logger.LogError($"Failed to download file. Url:{url}");
            }

            return json;
        }

        public void DownloadImage(string imageUrl, string fileName)
        {
            using (var client = new WebClient())
            {
                byte[] imageData = client.DownloadData(imageUrl);
                using (var imageFile = new FileStream(fileName, FileMode.Create))
                {
                    imageFile.Write(imageData, 0, imageData.Length);
                }
            }
        }
    }
}