docker {
  docker build -t demo_app_img_name:v2 .
  shift img to kind env-   kind load docker-image demo_app_img_name:v2 --name spring-lab


  docker tag demo_app_img_name:v3 shivakumardwd/demo_app_img_name_on_hub:v2

  docker push shivakumardwd/demo_app_img_name_on_hub:v2
}

label and logs {
  kubectl get pods --show-labels
  kubectl logs -l app=<result>

  or
  kubectl logs -f <pod-name>
    or
    kubectl logs -f deployment/spring-deployment-name

}



kind delete cluster --name spring-lab
kubctl get nodes

kind create cluster --name spring-lab --config kind-config.yaml
kubctl get nodes

kind load docker-image demo_app_img_name:v1 --name spring-lab
docker exec spring-lab-worker crictl images | grep spring-app

kubectl apply -f deployment.yml
kubectl get pods -o wide

kubectl apply -f service.yaml
kubectl get service -o wide


Helm {
    # Linux (official install script)
    curl -fsSL https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
    helm version

    helm upgrade --install my-traefik traefik/traefik \
    --namespace traefik --create-namespace \
    -f traefik-values.yaml
}

